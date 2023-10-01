import { NextRequest, NextResponse } from "next/server";
import WooClient from "@/utils/WooClient";


export async function GET(request: Request, 
  { params }: { params: { slug: string } }
  ) {
    const slug = params.slug
    try {
      const response = await WooClient.get(`products`, {
        slug: `${slug[0]}`
      });
      console.log(response.data);
      return NextResponse.json(response.data[0]);

    } catch (e) {
      console.log(e);
      return NextResponse.json(e);

    }


}