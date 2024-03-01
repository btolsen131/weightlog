import { NextResponse } from "next/server";

export function GET(req, res){
  try {
    var data = {
        "lastWeek": 235,
        "thisWeek":233
    };

      return NextResponse.json(data, {
        status: 200,
      });
  } catch (err){
     return NextResponse.json({error: "Internal Server Error"}, {status: 500});
  }
}
