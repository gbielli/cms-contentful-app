import { Card, CardHeader, CardTitle } from "@/app/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Category = () => {
  return (
    <div className="grid grid-cols-3 gap-10 pt-20">
      <Card className="bg-background hover:scale-[1.02] transition duration-200">
        <CardHeader className="flex flex-row items-center gap-5 border hover:border-primary  rounded-2xl">
          <CardTitle className="text-3xl">Soin du crâne</CardTitle>
          <div className="flex items-center ml-auto gap-5">
            <Image src="/images/mem3.png" width={64} height={64} alt="bald" />
            <ArrowRight />
          </div>
        </CardHeader>
      </Card>
      <Card className="bg-background hover:scale-[1.02] transition duration-200">
        <CardHeader className="flex flex-row items-center gap-5 border hover:border-primary rounded-2xl">
          <CardTitle className="text-3xl">Soin du visage</CardTitle>
          <div className="flex items-center ml-auto gap-5">
            <Image src="/images/mem2.png" width={64} height={64} alt="bald" />
            <ArrowRight />
          </div>
        </CardHeader>
      </Card>
      <Card className="bg-background hover:scale-[1.02] transition duration-200">
        <CardHeader className="flex flex-row items-center gap-5 border hover:border-primary  rounded-2xl">
          <CardTitle className="text-3xl">Soin de la barbe</CardTitle>
          <div className="flex items-center ml-auto gap-5">
            <Image src="/images/mem1.png" width={64} height={64} alt="bald" />
            <ArrowRight />
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Category;
