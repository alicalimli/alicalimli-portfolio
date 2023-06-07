import { AiOutlineLoading3Quarters } from "react-icons/ai";
import React, { useRef, useState } from "react";

interface PrimaryButtonProps {
  name: string;
  onClick?: () => void;
  className?: string;
  btnType?: "button" | "submit";
  type?: "solid" | "outline" | "loading" | "default";
}

const PrimaryButton = ({
  className,
  type = "default",
  btnType = "button",
  name,
  onClick,
}: PrimaryButtonProps) => {
  const btnFillRef = useRef<HTMLDivElement>(null);

  const getBtnTypeClass = () => {
    if (type === "default") {
      return "border-none bg-bg-secondary";
    }
    if (type === "outline") {
      return "bg-transparent border border-muted-secondary/30";
    }
    if (type === "solid") {
      return "bg-accent-primary border border-accent-primary";
    }
    if (type === "loading") {
      return "border-none bg-accent-primary";
    }
  };

  const animateBtnFill = (btnFill, translateY, duration) => {
    requestAnimationFrame(() => {
      btnFill.animate(
        {
          transform: `translate(-50%, ${translateY}%)`,
        },
        { duration, fill: "forwards", easing: "ease" }
      );
    });
  };

  const onMouseEnter = () => {
    animateBtnFill(btnFillRef.current, 50, 0);

    animateBtnFill(btnFillRef.current, -50, 850);
  };

  const onMouseLeave = () => {
    animateBtnFill(btnFillRef.current, -150, 850);
  };

  return (
    <button
      onClick={() => onClick?.()}
      type={btnType}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`
          ${getBtnTypeClass()}
          ${className}
          relative
          cursor-pointer overflow-hidden
          rounded-full
          p-5
          px-10
          text-['#fff']
          duration-400
          ease-in-out
          hover:scale-105
          hover:border-accent-tinted 
          sm:p-6
          sm:px-12
      `}
    >
      <div
        ref={btnFillRef}
        className={`
            absolute 
            top-1/2 left-1/2 h-[200%] w-[150%] 
            -translate-x-1/2  translate-y-1/2
            rounded-[60%] p-4 bg-accent-tinted
          `}
      />

      <div className="relative z-10">
        <AiOutlineLoading3Quarters
          className={`
            ${type === "loading" ? "opacity-100" : "opacity-0"}
            absolute
            inset-0
            m-auto
            animate-spin 
            text-3xl 
            text-[#fff] 
            duration-400
          `}
        />

        <span
          className={`
            duration-400
            text-white
            ${type === "loading" ? "opacity-0" : "opacity-100"}
          `}
        >
          {name}
        </span>
      </div>
      {/* <div
        className={`
        ${type === "loading" ? "top-0 opacity-100" : "top-full opacity-0"}
          absolute
          left-0
          grid
          h-full
          w-full
          place-items-center
          text-[#fff]
          duration-400
          ease-in-out
          bg-accent-tinted
          group-hover:top-0
          group-hover:opacity-100
        `}
      >
        <AiOutlineLoading3Quarters
          className={`
            ${type === "loading" ? "opacity-100" : "opacity-0"}
            absolute
            m-auto
            animate-spin 
            text-3xl 
            text-[#fff] 
            duration-400
          `}
        />
        <span
          className={`
            duration-400
            ${type === "loading" ? "opacity-0" : "opacity-100"}
          `}
        >
          {name}
        </span>
      </div> */}
    </button>
  );
};

export default PrimaryButton;
