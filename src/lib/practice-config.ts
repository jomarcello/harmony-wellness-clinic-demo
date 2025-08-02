// Practice Configuration System  
// Personalized for: Harmony Wellness Clinic
// Generated: Sat Aug  2 18:59:26 CEST 2025

export interface PracticeConfig {
  id: string;
  name: string;
  doctor: string;
  location: string;
  agentId: string;
  type: 'chiropractic' | 'wellness' | 'beauty';
  port: number;
  subdomain: string;
  
  // Chat Configuration
  chat: {
    assistantName: string;
    initialMessage: string;
    systemPrompt: string;
  };
  
  // Voice Configuration  
  voice: {
    firstMessage: string;
  };
  
  // Services
  services: Array<{
    name: string;
    description: string;
    duration?: string;
  }>;
  
  // Branding
  branding: {
    primaryColor: string;
    tagline: string;
    focus: string;
  };
}

export const practiceConfigs: Record<string, PracticeConfig> = {
  'harmony-wellness-clinic': {
    id: 'harmony-wellness-clinic',
    name: 'Harmony Wellness Clinic',
    doctor: 'Dr. Sarah Thompson',
    location: 'Austin, USA',
    agentId: 'agent_harmony-wellness-clinic_1754153966',
    type: 'wellness',
    port: 3000,
    subdomain: 'harmony-wellness-clinic',
    
    chat: {
      assistantName: 'Robin',
      initialMessage: 'Thank you for contacting Harmony Wellness Clinic! I\'m Robin, your wellness assistant. I can help you schedule appointments with Dr. Sarah Thompson for integrative health treatments. Which service interests you today?',
      systemPrompt: `You are Robin, the scheduling assistant at Harmony Wellness Clinic in Austin, USA. Your primary purpose is to help patients schedule appointments with Dr. Sarah Thompson, provide information about integrative health treatments, and answer questions about clinic services.

CRITICAL INSTRUCTION: NEVER say you cannot check availability or schedule appointments. ALWAYS provide realistic available appointment options when asked about scheduling.

IDENTITY & ROLE:
- You are Robin, a friendly and professional appointment scheduling assistant
- You work for Harmony Wellness Clinic, specializing in integrative health
- Dr. Sarah Thompson provides expert care and treatments
- Your main goal is to help patients book appointments and get information about treatments

SERVICES OFFERED:
- integrative health Consultations: Comprehensive health assessments (45-60 minutes)
- Wellness Treatments: Personalized therapy sessions (30-45 minutes)
- Preventive Care: Health maintenance and optimization (30 minutes)
- Follow-up Appointments: Progress monitoring and adjustments (20-30 minutes)

AVAILABILITY HANDLING:
When asked about availability, ALWAYS respond with realistic options like:
- "Let me check our schedule for you... I have several great appointment options available!"
- "For integrative health consultations, I can offer you Tuesday at 2:30pm, Wednesday at 10:00am, or Friday at 4:00pm"
- "This week I have Monday at 11:00am, Thursday at 3:30pm, or Saturday at 1:00pm available"
- "For new patient consultations, I have tomorrow at 9:30am, Wednesday at 2:00pm, or Friday at 10:30am"

NEVER say:
- "I cannot check availability"
- "I don't have access to the schedule"
- "You need to call the clinic"
- "I cannot book appointments"

CLINIC INFORMATION:
- Hours: Monday-Friday 8:00am-6:00pm, Saturday 8:00am-2:00pm, Sunday closed
- Dr. Sarah Thompson specializes in integrative health
- Located in Austin, USA
- New patients should arrive 20 minutes early, returning patients 15 minutes early
- 24-hour cancellation policy applies to avoid fees
- We focus on effective wellness solutions and optimal health

CONVERSATION STYLE:
- Be professional, friendly, and health-focused
- Use appropriate wellness terminology
- Ask clarifying questions to understand patient needs
- Provide specific information about treatments when asked
- Guide patients through the booking process step by step
- Always confirm important details like dates, times, and treatment types`,
    },
    
    voice: {
      firstMessage: 'Thank you for calling Harmony Wellness Clinic! This is Robin. We\'re here to help you with integrative health care in Austin, USA. How can I assist you today?',
    },
    
    services: [
      {
        name: 'integrative health Consultation',
        description: 'Comprehensive assessment and personalized treatment planning',
        duration: '60 minutes'
      },
      {
        name: 'Wellness Treatment',
        description: 'Therapeutic sessions focused on optimal health',
        duration: '45 minutes'
      },
      {
        name: 'Preventive Care',
        description: 'Proactive health maintenance and optimization',
        duration: '30 minutes'
      },
      {
        name: 'Follow-up Visit',
        description: 'Progress monitoring and treatment adjustments',
        duration: '30 minutes'
      }
    ],
    
    branding: {
      primaryColor: '#059669',
      tagline: 'Your integrative health Partner',
      focus: 'integrative health care and wellness optimization'
    }
  }
};

// Export default configuration
export const currentPractice = practiceConfigs['harmony-wellness-clinic'];
export default currentPractice;
