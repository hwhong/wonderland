import React from "react";
import "./popover.css";

interface PopoverProps {
  content: React.ReactChild | string;
}

export function Popover(props: PopoverProps) {
  const { content } = props;
  const handlePosition = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const ID = e.currentTarget.getAttribute("data-hover-id")!;
    const wrapper = document.getElementById(ID)!;
    let top = "";
    if (
      !(
        e.currentTarget.getBoundingClientRect().top + wrapper.offsetHeight >
        window.innerHeight
      )
    ) {
      top = `${e.clientY + e.currentTarget.offsetHeight}px`;
    } else {
      top = `${
        e.clientY - (wrapper.offsetHeight + e.currentTarget.offsetHeight)
      }px`;
    }
    return `position: fixed; left: ${
      e.clientX - wrapper.offsetWidth / 2
    }px; top:${top}`;
  };

  const onMouseOver = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const hoverContent = e.currentTarget.getAttribute("data-hover-content");
    const ID = Math.random().toString(36).substr(2, 9);
    const wrapper = document.createElement("DIV");
    e.currentTarget.setAttribute("data-hover-id", ID);
    wrapper.setAttribute("data-hover-wrapper", "");
    wrapper.setAttribute("id", ID);

    wrapper.innerHTML = hoverContent ?? "<div>Not Working</div>";
    document.body.append(wrapper);
    wrapper.setAttribute("style", handlePosition(e));
  };

  const onMouseMove = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const ID = e.currentTarget.getAttribute("data-hover-id")!;
    const wrapper = document.getElementById(ID)!;
    wrapper.setAttribute("style", handlePosition(e));
  };

  const onMouseLeave = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const ID = e.currentTarget.getAttribute("data-hover-id")!;
    document.getElementById(ID)!.style.opacity = "0";
    document.getElementById(ID)!.style.transform = "scale(.8)";
    setTimeout(() => {
      document.getElementById(ID)!.remove();
    }, 150);
  };

  return (
    <div className="root">
      <a
        href="#"
        className="content"
        onMouseOver={onMouseOver}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        data-hover-content={content}
      >
        Zundert, Netherlands
      </a>
    </div>
  );
}
