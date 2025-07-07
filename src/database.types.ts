export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      events: {
        Row: {
          id: number
          created_at: string
          title: string
          description: string
          date: string
          image_url: string
          isPast: boolean | null
        }
        Insert: {
          id?: number
          created_at?: string
          title: string
          description: string
          date: string
          image_url: string
          isPast?: boolean | null
        }
        Update: {
          id?: number
          created_at?: string
          title?: string
          description?: string
          date?: string
          image_url?: string
          isPast?: boolean | null
        }
        Relationships: []
      }
      marquee_text: {
        Row: {
          id: number
          created_at: string
          text_content: string
        }
        Insert: {
          id?: number
          created_at?: string
          text_content: string
        }
        Update: {
          id?: number
          created_at?: string
          text_content?: string
        }
        Relationships: []
      }
      members: {
        Row: {
          id: number
          created_at: string
          name: string
          phone: string
        }
        Insert: {
          id?: number
          created_at?: string
          name: string
          phone: string
        }
        Update: {
          id?: number
          created_at?: string
          name?: string
          phone?: string
        }
        Relationships: []
      }
      slides: {
        Row: {
          id: number
          created_at: string
          url: string
          caption: string
        }
        Insert: {
          id?: number
          created_at?: string
          url: string
          caption: string
        }
        Update: {
          id?: number
          created_at?: string
          url?: string
          caption?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
