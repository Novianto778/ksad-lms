export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      assignment: {
        Row: {
          avaliable_until: string | null
          deadline: string | null
          id: number
          submoduleId: number | null
          title: string | null
        }
        Insert: {
          avaliable_until?: string | null
          deadline?: string | null
          id?: number
          submoduleId?: number | null
          title?: string | null
        }
        Update: {
          avaliable_until?: string | null
          deadline?: string | null
          id?: number
          submoduleId?: number | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "assignment_submoduleId_fkey"
            columns: ["submoduleId"]
            referencedRelation: "submodule"
            referencedColumns: ["id"]
          }
        ]
      }
      course: {
        Row: {
          cover: string | null
          description: string | null
          id: number
          level: number | null
          title: string | null
          total_module: number | null
        }
        Insert: {
          cover?: string | null
          description?: string | null
          id?: number
          level?: number | null
          title?: string | null
          total_module?: number | null
        }
        Update: {
          cover?: string | null
          description?: string | null
          id?: number
          level?: number | null
          title?: string | null
          total_module?: number | null
        }
        Relationships: []
      }
      member: {
        Row: {
          angkatan: number | null
          id: number
          level: number | null
          nama: string | null
          point: number | null
          userId: string | null
        }
        Insert: {
          angkatan?: number | null
          id?: number
          level?: number | null
          nama?: string | null
          point?: number | null
          userId?: string | null
        }
        Update: {
          angkatan?: number | null
          id?: number
          level?: number | null
          nama?: string | null
          point?: number | null
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "member_userId_fkey"
            columns: ["userId"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      member_assignment: {
        Row: {
          assignmentId: number
          created_at: string | null
          memberId: number
          url: string
        }
        Insert: {
          assignmentId: number
          created_at?: string | null
          memberId?: number
          url: string
        }
        Update: {
          assignmentId?: number
          created_at?: string | null
          memberId?: number
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "member_assignment_assignmentId_fkey"
            columns: ["assignmentId"]
            referencedRelation: "assignment"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "member_assignment_memberId_fkey"
            columns: ["memberId"]
            referencedRelation: "member"
            referencedColumns: ["id"]
          }
        ]
      }
      member_course: {
        Row: {
          courseId: number | null
          memberCourseId: number
          progress: number | null
          status: string | null
          userId: number | null
        }
        Insert: {
          courseId?: number | null
          memberCourseId?: number
          progress?: number | null
          status?: string | null
          userId?: number | null
        }
        Update: {
          courseId?: number | null
          memberCourseId?: number
          progress?: number | null
          status?: string | null
          userId?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "member_course_courseId_fkey"
            columns: ["courseId"]
            referencedRelation: "course"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "member_course_userId_fkey"
            columns: ["userId"]
            referencedRelation: "member"
            referencedColumns: ["id"]
          }
        ]
      }
      member_progress: {
        Row: {
          memberCourseId: number
          status: string | null
          submoduleId: number | null
        }
        Insert: {
          memberCourseId: number
          status?: string | null
          submoduleId?: number | null
        }
        Update: {
          memberCourseId?: number
          status?: string | null
          submoduleId?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "member_progress_memberCourseId_fkey"
            columns: ["memberCourseId"]
            referencedRelation: "member_course"
            referencedColumns: ["memberCourseId"]
          },
          {
            foreignKeyName: "member_progress_submoduleId_fkey"
            columns: ["submoduleId"]
            referencedRelation: "submodule"
            referencedColumns: ["id"]
          }
        ]
      }
      mentor: {
        Row: {
          id: number
          nama: string | null
          status: boolean | null
        }
        Insert: {
          id?: number
          nama?: string | null
          status?: boolean | null
        }
        Update: {
          id?: number
          nama?: string | null
          status?: boolean | null
        }
        Relationships: []
      }
      module: {
        Row: {
          courseId: number | null
          id: number
          title: string | null
        }
        Insert: {
          courseId?: number | null
          id?: number
          title?: string | null
        }
        Update: {
          courseId?: number | null
          id?: number
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "module_courseId_fkey"
            columns: ["courseId"]
            referencedRelation: "course"
            referencedColumns: ["id"]
          }
        ]
      }
      submodule: {
        Row: {
          id: number
          moduleId: number | null
          moduleUrl: string | null
          title: string | null
          type: string | null
        }
        Insert: {
          id?: number
          moduleId?: number | null
          moduleUrl?: string | null
          title?: string | null
          type?: string | null
        }
        Update: {
          id?: number
          moduleId?: number | null
          moduleUrl?: string | null
          title?: string | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "submodule_moduleId_fkey"
            columns: ["moduleId"]
            referencedRelation: "module"
            referencedColumns: ["id"]
          }
        ]
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
