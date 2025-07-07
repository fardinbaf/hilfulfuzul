import { createContext, useContext, useState, ReactNode } from 'react';

// Interfaces
export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  image_url: string;
  isPast?: boolean;
}

export interface Slide {
  url: string;
  caption: string;
}

export interface Member {
  id: number;
  name: string;
  phone: string;
}

interface DataContextType {
  events: Event[];
  setEvents: (events: Event[]) => void;
  marqueeText: string[];
  setMarqueeText: (text: string[]) => void;
  members: Member[];
  setMembers: (members: Member[]) => void;
  slides: Slide[];
  setSlides: (slides: Slide[]) => void;
}

// Initial Data
const initialEvents: Event[] = [
    {
      id: 1,
      title: "ঈদুল আযহা ২০২৩ খাদ্য বিতরণ",
      description: "গত ঈদুল আযহা উপলক্ষে ৩০টি পরিবারের মাঝে খাদ্য সামগ্রী বিতরণ করা হয়েছে।",
      date: "2023-06-28",
      image_url: "https://images4.imagebam.com/4f/ed/1e/ME11IW66_o.jpeg",
      isPast: true,
    },
    {
      id: 2,
      title: "রমজান ২০২৩ ইফতার বিতরণ",
      description: "রমজান মাসে প্রতিদিন 17 টি পরিবারের মাঝে ইফতার বিতরণ করা হয়েছে।",
      date: "2023-04-15",
      image_url: "https://images4.imagebam.com/10/3e/d4/ME11IW7V_o.jpeg",
      isPast: true,
    },
    {
      id: 3,
      title: "ঈদুল ফিতর ২০২২ সেমাই বিতরণ",
      description: "ঈদুল ফিতর উপলক্ষে ১০০টি পরিবারের মাঝে সেমাই ও চিনি বিতরণ করা হয়েছে।",
      date: "2022-05-02",
      image_url: "https://images4.imagebam.com/18/ff/0f/ME11IW67_o.jpeg",
      isPast: true,
    }
];

const initialMarqueeText: string[] = [
    "আগামী ঈদ-উল-আজহা উপলক্ষে অনুদান সংগ্রহ চলছে। যোগাযোগ করুন: +880 9696-290209 | আমাদের Whatsapp গ্রুপে যোগ দিতে, নিচের লিঙ্কে ক্লিক করুন। আপনার পণ্য বা সেবার বিজ্ঞাপন দিতে যোগাযোগ করুন。"
];

const initialSlides: Slide[] = [
    {
        url: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        caption: "Together We Can Make a Difference"
    },
    {
        url: "https://images4.imagebam.com/10/3e/d4/ME11IW7V_o.jpeg",
        caption: "Bringing Hope to Those in Need"
    },
    {
        url: "https://images4.imagebam.com/0b/da/cc/ME11EGOJ_o.jpg",
        caption: "Supporting Communities During Eid"
    }
];

const initialMembers: Member[] = [
  { id: 1, name: 'Fardin Islam', phone: '+8801...'},
  { id: 2, name: 'Md Shohag Hossain', phone: '+8801...'},
  { id: 3, name: 'Md Juel Hossain', phone: '+8801...'},
];


const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [marqueeText, setMarqueeText] = useState<string[]>(initialMarqueeText);
  const [members, setMembers] = useState<Member[]>(initialMembers);
  const [slides, setSlides] = useState<Slide[]>(initialSlides);

  const value = {
    events,
    setEvents,
    marqueeText,
    setMarqueeText,
    members,
    setMembers,
    slides,
    setSlides,
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
