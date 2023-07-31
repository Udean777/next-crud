import connMongodb from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await connMongodb();
  await Topic.create({ title, description });
  return NextResponse.json({ mssg: "Topic created" }, { status: 201 });
}

export async function GET() {
  await connMongodb();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connMongodb();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ mssg: "Topic deleted" }, { status: 200 });
}
