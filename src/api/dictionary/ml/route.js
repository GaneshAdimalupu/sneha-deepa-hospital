import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    name: 'സ്നേഹ ദീപ ആശുപത്രി',
    tagline: 'ആരോഗ്യകരമായ ജീവിതത്തിനായുള്ള കരുതലോടെയുള്ള പരിചരണം',
    mission: 'ഞങ്ങളുടെ സമൂഹത്തിലെ എല്ലാ അംഗങ്ങൾക്കും കരുതലോടെയും ബഹുമാനത്തോടെയും ലഭ്യമായ, ഉയർന്ന നിലവാരത്തിലുള്ള ആരോഗ്യ പരിരക്ഷ നൽകുക.',
    contactUs: 'ഞങ്ങളെ ബന്ധപ്പെടുക',
    services: 'ഞങ്ങളുടെ സേവനങ്ങൾ',
    about: 'ഞങ്ങളെക്കുറിച്ച്',
    doctors: 'ഡോക്ടർമാർ',
    news: 'വാർത്തകൾ',
    gallery: 'ഗാലറി',
    contact: 'ബന്ധപ്പെടുക',
    // Add more translations as needed
  });
}
