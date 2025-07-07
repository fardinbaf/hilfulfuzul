import { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react';
import { supabase } from '../supabaseClient';
import { Session } from '@supabase/supabase-js';
import { toast } from 'react-hot-toast';
import { Database } from '../database.types';


// Interfaces
export type Event = Database['public']['Tables']['events']['Row'];
export type Slide = Database['public']['Tables']['slides']['Row'];
export type Member = Database['public']['Tables']['members']['Row'];
export type Marquee = Database['public']['Tables']['marquee_text']['Row'];

type EventInsert = Database['public']['Tables']['events']['Insert'];
type EventUpdate = Database['public']['Tables']['events']['Update'];
type MemberInsert = Database['public']['Tables']['members']['Insert'];
type MemberUpdate = Database['public']['Tables']['members']['Update'];
type SlideInsert = Database['public']['Tables']['slides']['Insert'];
type SlideUpdate = Database['public']['Tables']['slides']['Update'];
type MarqueeInsert = Database['public']['Tables']['marquee_text']['Insert'];


interface DataContextType {
  events: Event[];
  marqueeText: Marquee[];
  members: Member[];
  slides: Slide[];
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  addEvent: (event: EventInsert) => Promise<void>;
  updateEvent: (id: number, event: EventUpdate) => Promise<void>;
  deleteEvent: (id: number) => Promise<void>;
  addMember: (member: MemberInsert) => Promise<void>;
  updateMember: (id: number, member: MemberUpdate) => Promise<void>;
  deleteMember: (id: number) => Promise<void>;
  addSlide: (slide: SlideInsert) => Promise<void>;
  updateSlide: (id: number, slide: SlideUpdate) => Promise<void>;
  deleteSlide: (id: number) => Promise<void>;
  updateMarqueeText: (texts: Marquee[]) => Promise<void>;
}


const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState<Event[]>([]);
  const [marqueeText, setMarqueeText] = useState<Marquee[]>([]);
  const [members, setMembers] = useState<Member[]>([]);
  const [slides, setSlides] = useState<Slide[]>([]);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
        const fetchEvents = supabase.from('events').select('*').order('date', { ascending: false });
        const fetchMarquee = supabase.from('marquee_text').select('*');
        const fetchMembers = supabase.from('members').select('*').order('name', { ascending: true });
        const fetchSlides = supabase.from('slides').select('*');

        const [eventsRes, marqueeRes, membersRes, slidesRes] = await Promise.all([fetchEvents, fetchMarquee, fetchMembers, fetchSlides]);

        if (eventsRes.error) throw eventsRes.error;
        if (eventsRes.data) setEvents(eventsRes.data);
        
        if (marqueeRes.error) throw marqueeRes.error;
        if (marqueeRes.data) setMarqueeText(marqueeRes.data);
        
        if (membersRes.error) throw membersRes.error;
        if (membersRes.data) setMembers(membersRes.data);

        if (slidesRes.error) throw slidesRes.error;
        if (slidesRes.data) setSlides(slidesRes.data);
    } catch (error: any) {
        toast.error(`Error fetching data: ${error.message}`);
    } finally {
        setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Auth methods
  const login = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  // Event methods
  const addEvent = async (event: EventInsert) => {
    const { error } = await supabase.from('events').insert([event]);
    if (error) throw error;
    await fetchData();
  };
  const updateEvent = async (id: number, event: EventUpdate) => {
    const { error } = await supabase.from('events').update(event).eq('id', id);
    if (error) throw error;
    await fetchData();
  };
  const deleteEvent = async (id: number) => {
    const { error } = await supabase.from('events').delete().eq('id', id);
    if (error) throw error;
    await fetchData();
  };

  // Member methods
  const addMember = async (member: MemberInsert) => {
    const { error } = await supabase.from('members').insert([member]);
    if (error) throw error;
    await fetchData();
  };
  const updateMember = async (id: number, member: MemberUpdate) => {
    const { error } = await supabase.from('members').update(member).eq('id', id);
    if (error) throw error;
    await fetchData();
  };
  const deleteMember = async (id: number) => {
    const { error } = await supabase.from('members').delete().eq('id', id);
    if (error) throw error;
    await fetchData();
  };

  // Slide methods
  const addSlide = async (slide: SlideInsert) => {
    const { error } = await supabase.from('slides').insert([slide]);
    if (error) throw error;
    await fetchData();
  };
  const updateSlide = async (id: number, slide: SlideUpdate) => {
    const { error } = await supabase.from('slides').update(slide).eq('id', id);
    if (error) throw error;
    await fetchData();
  };
  const deleteSlide = async (id: number) => {
    const { error } = await supabase.from('slides').delete().eq('id', id);
    if (error) throw error;
    await fetchData();
  };
  
  // Marquee methods
  const updateMarqueeText = async (newTexts: Marquee[]) => {
      // Delete all existing marquee texts
      const existingIds = marqueeText.map(m => m.id);
      if(existingIds.length > 0) {
        const { error: deleteError } = await supabase.from('marquee_text').delete().in('id', existingIds);
        if (deleteError) throw deleteError;
      }
      
      // Insert new ones
      const newMarqueeData: MarqueeInsert[] = newTexts.map(t => ({ text_content: t.text_content }));
      if(newMarqueeData.length > 0) {
        const { error: insertError } = await supabase.from('marquee_text').insert(newMarqueeData);
        if (insertError) throw insertError;
      }
      await fetchData();
  };


  const value = {
    events,
    marqueeText,
    members,
    slides,
    isAuthenticated: !!session,
    isLoading,
    login,
    logout,
    addEvent,
    updateEvent,
    deleteEvent,
    addMember,
    updateMember,
    deleteMember,
    addSlide,
    updateSlide,
    deleteSlide,
    updateMarqueeText
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
