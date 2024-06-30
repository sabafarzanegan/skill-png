import * as React from "react";

import { Button } from "@/components/ui/button";
import DatePicker from "./DatePicker";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Form({ data, setData, infoObj, saveImage }) {
  const nameHandler = (e) => {
    setData({ ...data, name: e.target.value });
  };
  const skillHandler = (e) => {
    setData({ ...data, skills: e.target.value });
  };
  const avatarHandler = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setData({ ...data, pictureUrl: url });
  };
  const dataHandler = (date) => {
    const dayDiff = Math.abs(date - new Date());
    const diff = Math.ceil(dayDiff / (1000 * 60 * 60 * 24) - 1);
    setData({ ...data, dateRegister: diff });
  };

  return (
    <Card className="w-[350px] dark">
      <CardHeader>
        <CardTitle>Resume creator</CardTitle>
        <CardDescription>Deploy your resume in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">full name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={data.name}
                onChange={nameHandler}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="skill">skills</Label>
              <Input
                id="skills"
                placeholder="exm:js,html..."
                value={data.skills}
                onChange={skillHandler}
              />
            </div>
            <div className="flex flex-col space-y-1.5 text-white">
              <Label htmlFor="picture">Picture</Label>
              <Input id="picture" type="file" onChange={avatarHandler} />
            </div>
            <div className="flex flex-col space-y-1.5 text-white">
              <Label htmlFor="registerdate">Date</Label>
              <DatePicker id="registerdate" dataHandler={dataHandler} />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">reset</Button>
        <Button onClick={saveImage}>export</Button>
      </CardFooter>
    </Card>
  );
}
