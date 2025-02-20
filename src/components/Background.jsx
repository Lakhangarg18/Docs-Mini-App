import React from "react";

function Background() {
  return (
    <div class="w-full h-screen fixed z-[2]">
      <div
        class="absolute top-[5%] w-full
        py-10
        flex
        justify-center
        text-zinc-600
        text-xl
        font-semibold"
      >
        Documents.
      </div>
      <h1 class="absolute leading-none tracking-tighter text-[13vw] -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 text-zinc-700  ">
        Docs.
      </h1>
    </div>
  );
}

export default Background;
