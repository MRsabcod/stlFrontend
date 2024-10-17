import React from 'react';
import Image from 'next/image';

import {Cpu} from 'lucide-react'
function Services() {
  return (
    <div className="flex flex-col md:flex-row md:items-center">
      <div className="flex-1 p-16 flex justify-center flex-col">
      <Cpu width={75} height={75} color='#6B21A8' className='bg-white rounded-lg' />
        <br />
        <h1 className="text-xl font-semibold">Software Services</h1>
        <br />
        <p className="w-11/12 text-lg">The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is eleifend porta arcu In hac habitasse the platea thelorem turpoi dictumst. In lacus libero faucibus malesuada</p>
      </div>
      <div className="flex-1 p-4 md:py-10 flex justify-center items-center md:h-[380px]">
        <img className="rounded-lg w-full h-full" src="https://s3-alpha-sig.figma.com/img/4c8d/163a/63855e2d66c6383571f2e2962a8b73f9?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hSjKzL5HVRQ20piwaP7V6JX2piN6TvWqnW1zlgj1hAjChxmudVBuf0wZXf-~qlkAL0n5qF45jggngzj-XsrztgYYgNrztMRYOpvovVJyJyFaIdbjMXo0kkFoTEFf97cKtn0h-y4o0LnXcRETnDpGEnvBLIFJnQWlsB18btvw3T8oNxHraa61XldKPXF86u9cnFfTfa6BjUmaaVp-ygU4XLPxhAuh3qsnIeM9tgooVCIjgx0WMg6-LV6z2Ka0wUuCCzTY0lQ9JIuX5JGPg4GKGp3IrcbnhT608-VVObt5SOByI5ofD5LdBNFNa-P9dr0k~lE-A9aXhNyACES-KCDTUg__" />
      </div>
      
    </div>
  );
};

export default Services;