import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Profile from "./Profile";
import { Badge } from "./ui/badge";
import { forwardRef } from "react";

const Display = forwardRef(function Display({ data }, ref) {
  return (
    <Card className="w-[350px] dark" ref={ref}>
      <CardHeader>
        <CardDescription className="bg-stone-400 text-center text-gray-900 font-bold py-2">
          {data.filename}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center gap-x-5 ">
        <Profile avatar={data.pictureUrl} name={data.name} />
        <div className="flex flex-col gap-y-3 ">
          <CardTitle>{data.name}</CardTitle>
          <CardDescription>
            {!data.dateRegister ? "today" : `${data.dateRegister} days ago`}{" "}
          </CardDescription>
          <div>
            {data.skills.split(",").map((skill, index) => (
              <Badge className="mr-1" key={index} variant="secoundary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

export default Display;
