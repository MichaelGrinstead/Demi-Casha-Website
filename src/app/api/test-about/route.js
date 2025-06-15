import { NextResponse } from "next/server";
import { getAbout } from "../../../lib/storyblok";

export async function GET() {
  try {
    const about = await getAbout();
    return NextResponse.json({
      success: true,
      about,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
