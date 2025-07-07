// src/data/store.ts
import { nanoid } from 'nanoid';

// --- Types ---
export interface Slide {
  id: string;
  url: string;
  caption: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  image_url: string;
}

export interface Stats {
  familiesHelped: number;
  yearsOfService: number;
  activeVolunteers: number;
  projectsCompleted: number;
}

export interface Member {
  id: string;
  name: string;
  phone: string;
}

export type Notice = string;

// --- LocalStorage Keys ---
const KEYS = {
  SLIDES: 'hilful_slides',
  EVENTS: 'hilful_events',
  STATS: 'hilful_stats',
  MEMBERS: 'hilful_members',
  NOTICE: 'hilful_notice',
};

// --- Default Data ---
const defaultSlides: Slide[] = [
  { id: '1', url: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", caption: "Together We Can Make a Difference" },
  { id: '2', url: "https://images4.imagebam.com/10/3e/d4/ME11IW7V_o.jpeg", caption: "Bringing Hope to Those in Need" },
  { id: '3', url: "https://images4.imagebam.com/0b/da/cc/ME11EGOJ_o.jpg", caption: "Supporting Communities During Eid" }
];

const defaultEvents: Event[] = [
  { id: '1', title: "ঈদুল আযহা ২০২৩ খাদ্য বিতরণ", description: "গত ঈদুল আযহা উপলক্ষে ৩০টি পরিবারের মাঝে খাদ্য সামগ্রী বিতরণ করা হয়েছে।", date: "2023-06-28", image_url: "https://images4.imagebam.com/4f/ed/1e/ME11IW66_o.jpeg" },
  { id: '2', title: "রমজান ২০২৩ ইফতার বিতরণ", description: "রমজান মাসে প্রতিদিন 17 টি পরিবারের মাঝে ইফতার বিতরণ করা হয়েছে।", date: "2023-04-15", image_url: "https://images4.imagebam.com/10/3e/d4/ME11IW7V_o.jpeg" },
  { id: '3', title: "ঈদুল ফিতর ২০২২ সেমাই বিতরণ", description: "ঈদুল ফিতর উপলক্ষে ১০০টি পরিবারের মাঝে সেমাই ও চিনি বিতরণ করা হয়েছে।", date: "2022-05-02", image_url: "https://images4.imagebam.com/18/ff/0f/ME11IW67_o.jpeg" }
];

const defaultStats: Stats = {
  familiesHelped: 30,
  yearsOfService: 6,
  activeVolunteers: 20,
  projectsCompleted: 12,
};

const defaultMembers: Member[] = [
    { id: nanoid(), name: 'Fardin Islam', phone: '01xxxxxxxxx' },
    { id: nanoid(), name: 'Md Shohag Hossain', phone: '01xxxxxxxxx' },
    { id: nanoid(), name: 'Md Juel Hossain', phone: '01xxxxxxxxx' },
    { id: nanoid(), name: 'Md Nahid Hossain', phone: '01xxxxxxxxx' },
    { id: nanoid(), name: 'Md A. Ahad', phone: '01xxxxxxxxx' },
    { id: nanoid(), name: 'Saimon Siddique', phone: '01xxxxxxxxx' },
];

const defaultNotice: Notice = "আগামী ঈদ-উল-আজহা উপলক্ষে অনুদান সংগ্রহ চলছে। যোগাযোগ করুন: +880 9696-290209 | আমাদের Whatsapp গ্রুপে যোগ দিতে, নিচের লিঙ্কে ক্লিক করুন। আপনার পণ্য বা সেবার বিজ্ঞাপন দিতে যোগাযোগ করুন।";

// --- Generic localStorage handler ---
function getFromStorage<T>(key: string, defaultValue: T): T {
  try {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      return JSON.parse(storedValue);
    }
    localStorage.setItem(key, JSON.stringify(defaultValue));
    return defaultValue;
  } catch (error) {
    console.error(`Error reading from localStorage key “${key}”:`, error);
    return defaultValue;
  }
}

function saveToStorage<T>(key: string, value: T) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving to localStorage key “${key}”:`, error);
  }
}

// --- API-like functions ---
export const store = {
  // Slides
  getSlides: () => getFromStorage<Slide[]>(KEYS.SLIDES, defaultSlides),
  saveSlides: (slides: Slide[]) => saveToStorage(KEYS.SLIDES, slides),
  
  // Events
  getEvents: () => getFromStorage<Event[]>(KEYS.EVENTS, defaultEvents),
  saveEvents: (events: Event[]) => saveToStorage(KEYS.EVENTS, events),

  // Stats
  getStats: () => getFromStorage<Stats>(KEYS.STATS, defaultStats),
  saveStats: (stats: Stats) => saveToStorage(KEYS.STATS, stats),
  
  // Members
  getMembers: () => getFromStorage<Member[]>(KEYS.MEMBERS, defaultMembers),
  saveMembers: (members: Member[]) => saveToStorage(KEYS.MEMBERS, members),

  // Notice
  getNotice: () => getFromStorage<Notice>(KEYS.NOTICE, defaultNotice),
  saveNotice: (notice: Notice) => saveToStorage(KEYS.NOTICE, notice),
};
