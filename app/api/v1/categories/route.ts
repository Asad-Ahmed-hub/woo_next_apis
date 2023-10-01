import { NextRequest, NextResponse } from "next/server";
import WooClient from "@/utils/WooClient";


export async function GET(request: Request 
  ) {

    try {
      const response = await WooClient.get(`products/categories`);
      console.log(response.data);
      return NextResponse.json({categories: response.data});

    } catch (e) {
      console.log(e);
      return NextResponse.json(e);

    }


}