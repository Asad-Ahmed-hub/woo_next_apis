import { NextRequest, NextResponse } from "next/server";
import WooClient from "@/utils/WooClient";

export async function GET(request:NextRequest) {
      try {
        
        let  param = request.nextUrl.searchParams.get("category");
        
        if(param === null) {

            let response = await WooClient.get(`products`);
            return NextResponse.json({products: response.data});
        } else {
            let slug = param.toLowerCase().replace(" ", "-");
            let category_response = await WooClient.get(`products/categories`, {
                slug: `${slug}`
            });
            let category_id = category_response.data[0]?.id
            let response = await WooClient.get(`products`, {
                category: `${category_id}`
            });
            return NextResponse.json({products: response.data});
        }


  
      } catch (e) {
        console.log(e);
        return NextResponse.json(e);
  
      }
  
  
  }