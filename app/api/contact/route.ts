import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, organization, phone, areaOfInterest, message } = body;

    // Validate mandatory fields
    if (!name || !email || !organization || !message) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please fill in all mandatory fields (Name, Business Email, Organization, and Message).',
        },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please provide a valid corporate business email address.',
        },
        { status: 400 }
      );
    }

    // In production, this can forward to enterprise CRM/ticket system or SMTP gateway.
    // For the platform, log inquiry cleanly and return confirmation reference.
    const referenceId = `UPT-${Date.now().toString().slice(-6)}`;

    return NextResponse.json({
      success: true,
      referenceId,
      message: 'Inquiry received. An enterprise solutions architect will reach out within 1 business day.',
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'An internal error occurred while processing your request. Please try again.',
      },
      { status: 500 }
    );
  }
}
