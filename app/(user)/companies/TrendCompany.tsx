import React from 'react';
import Image from 'next/image';
import ChevronRightIcon from '../../../Icons/ChevronRightIcon/ChevronRightIcon';
import { truncate } from '../../../lib/truncate';
type Props = {
  companyName: string;
  logoUrl: string;
  description: string;
};
function TrendCompany({ companyName, logoUrl, description }: Props) {
  const truncatedDescription = truncate(description, 20);
  return (
    <div>
      <div className="py-[11px] border-b border-gray-300/20 w-full flex justify-between items-center ">
        <div className=" w-full h-full  flex items-center  ">
          <div className=" bg-orange-400  mr-5 min-h-[40px] min-w-[40px] flex justify-center items-center  rounded-lg">
            <Image
              className="p-[2px]"
              width={40}
              height={40}
              object-fit="contain"
              src={`${logoUrl}`}
              alt="logo"
            />
          </div>
          <div className="">
            <p className=" text-gray-900 text-base  ">{companyName}</p>
            <p className="text-gray-300 text-sm ">{truncatedDescription}</p>
          </div>
        </div>
        <ChevronRightIcon className="mr-5" />
      </div>
    </div>
  );
}

export default TrendCompany;
