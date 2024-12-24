export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      assessment_table: {
        Row: {
          dl: string | null
          dt: number | null
          gd: Json[] | null
          id: number
          isArchive: boolean | null
          isCore: boolean | null
          isGrade: boolean | null
          isLock: boolean | null
          log: string | null
          n: string | null
          nc: number | null
          sc: string | null
          sl: string | null
          ss: string | null
          t: Json[] | null
        }
        Insert: {
          dl?: string | null
          dt?: number | null
          gd?: Json[] | null
          id?: number
          isArchive?: boolean | null
          isCore?: boolean | null
          isGrade?: boolean | null
          isLock?: boolean | null
          log?: string | null
          n?: string | null
          nc?: number | null
          sc?: string | null
          sl?: string | null
          ss?: string | null
          t?: Json[] | null
        }
        Update: {
          dl?: string | null
          dt?: number | null
          gd?: Json[] | null
          id?: number
          isArchive?: boolean | null
          isCore?: boolean | null
          isGrade?: boolean | null
          isLock?: boolean | null
          log?: string | null
          n?: string | null
          nc?: number | null
          sc?: string | null
          sl?: string | null
          ss?: string | null
          t?: Json[] | null
        }
        Relationships: []
      }
      group_table: {
        Row: {
          g: string | null
          id: number
          log: string | null
          nc: number | null
          pupil: Json[] | null
          sc: string | null
          sl: string | null
          ss: string | null
          teacher: Json[] | null
        }
        Insert: {
          g?: string | null
          id?: number
          log?: string | null
          nc?: number | null
          pupil?: Json[] | null
          sc?: string | null
          sl?: string | null
          ss?: string | null
          teacher?: Json[] | null
        }
        Update: {
          g?: string | null
          id?: number
          log?: string | null
          nc?: number | null
          pupil?: Json[] | null
          sc?: string | null
          sl?: string | null
          ss?: string | null
          teacher?: Json[] | null
        }
        Relationships: []
      }
      pupil_table: {
        Row: {
          base: Json[] | null
          gnd: string | null
          groups: Json[] | null
          hse: string | null
          id: number
          log: string | null
          mid: string | null
          nc: number | null
          overall: Json | null
          pid: number | null
          pn: string | null
          sn: string | null
          tg: string | null
        }
        Insert: {
          base?: Json[] | null
          gnd?: string | null
          groups?: Json[] | null
          hse?: string | null
          id?: number
          log?: string | null
          mid?: string | null
          nc?: number | null
          overall?: Json | null
          pid?: number | null
          pn?: string | null
          sn?: string | null
          tg?: string | null
        }
        Update: {
          base?: Json[] | null
          gnd?: string | null
          groups?: Json[] | null
          hse?: string | null
          id?: number
          log?: string | null
          mid?: string | null
          nc?: number | null
          overall?: Json | null
          pid?: number | null
          pn?: string | null
          sn?: string | null
          tg?: string | null
        }
        Relationships: []
      }
      result_table: {
        Row: {
          aid: number | null
          fb: string | null
          g: string | null
          gd: string | null
          id: number
          log: string | null
          pc: number | null
          pid: number | null
          pn: string | null
          sn: string | null
          t: number[] | null
        }
        Insert: {
          aid?: number | null
          fb?: string | null
          g?: string | null
          gd?: string | null
          id?: number
          log?: string | null
          pc?: number | null
          pid?: number | null
          pn?: string | null
          sn?: string | null
          t?: number[] | null
        }
        Update: {
          aid?: number | null
          fb?: string | null
          g?: string | null
          gd?: string | null
          id?: number
          log?: string | null
          pc?: number | null
          pid?: number | null
          pn?: string | null
          sn?: string | null
          t?: number[] | null
        }
        Relationships: [
          {
            foreignKeyName: "result_table_aid_fkey"
            columns: ["aid"]
            isOneToOne: false
            referencedRelation: "assessment_table"
            referencedColumns: ["id"]
          },
        ]
      }
      teacher_table: {
        Row: {
          id: number
          log: string | null
          mid: string | null
          pn: string | null
          sal: string | null
          sn: string | null
          tid: string | null
        }
        Insert: {
          id?: number
          log?: string | null
          mid?: string | null
          pn?: string | null
          sal?: string | null
          sn?: string | null
          tid?: string | null
        }
        Update: {
          id?: number
          log?: string | null
          mid?: string | null
          pn?: string | null
          sal?: string | null
          sn?: string | null
          tid?: string | null
        }
        Relationships: []
      }
      test_table: {
        Row: {
          age: number | null
          id: number
          name: string | null
        }
        Insert: {
          age?: number | null
          id?: number
          name?: string | null
        }
        Update: {
          age?: number | null
          id?: number
          name?: string | null
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
