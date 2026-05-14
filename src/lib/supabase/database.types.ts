export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      courses: {
        Row: {
          id: string;
          title: string;
          slug: string;
          short_description: string;
          description: string;
          category: string;
          thumbnail_url: string | null;
          is_published: boolean;
          created_at: string;
          updated_at: string;
          objective: string | null;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          short_description: string;
          description: string;
          category: string;
          thumbnail_url?: string | null;
          is_published?: boolean;
          created_at?: string;
          updated_at?: string;
          objective?: string | null;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          short_description?: string;
          description?: string;
          category?: string;
          thumbnail_url?: string | null;
          is_published?: boolean;
          created_at?: string;
          updated_at?: string;
          objective?: string | null;
        };
        Relationships: [];
      };
      course_modules: {
        Row: {
          id: string;
          course_id: string;
          title: string;
          description: string | null;
          sort_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          course_id: string;
          title: string;
          description?: string | null;
          sort_order: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          course_id?: string;
          title?: string;
          description?: string | null;
          sort_order?: number;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "course_modules_course_id_fkey";
            columns: ["course_id"];
            referencedRelation: "courses";
            referencedColumns: ["id"];
          },
        ];
      };
      course_lessons: {
        Row: {
          id: string;
          module_id: string;
          title: string;
          description: string | null;
          content_type: "text" | "link" | "file";
          content_text: string | null;
          content_url: string | null;
          file_url: string | null;
          sort_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          module_id: string;
          title: string;
          description?: string | null;
          content_type: "text" | "link" | "file";
          content_text?: string | null;
          content_url?: string | null;
          file_url?: string | null;
          sort_order: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          module_id?: string;
          title?: string;
          description?: string | null;
          content_type?: "text" | "link" | "file";
          content_text?: string | null;
          content_url?: string | null;
          file_url?: string | null;
          sort_order?: number;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "course_lessons_module_id_fkey";
            columns: ["module_id"];
            referencedRelation: "course_modules";
            referencedColumns: ["id"];
          },
        ];
      };
      admin_profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string;
          role: string;
          created_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name: string;
          role?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string;
          role?: string;
          created_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
