"use client";
import { fetchAnime } from "@/app/action";
import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
let page = 2;


function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<ReactNode[]>([]);



  useEffect(() => {
    if (inView) {
      fetchAnime(page)
        .then((res) => {
          setData([...data, ...res]);
          page++;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [inView, data]);
  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
