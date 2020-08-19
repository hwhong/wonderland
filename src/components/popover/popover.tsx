import React from "react";
import "./popover.css";

interface PopoverProps {
  content: React.ReactChild | string;
}

export function Popover(props: PopoverProps) {
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
    // wrapper.setAttribute("style", "opacity: 0; transform: scale(.8)");
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
        data-hover-content="<div class='hover-content'>
    <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/344846/500px-P1040705_copyGemeentehuis_Zundert.jpg' />
    <p>Zundert is a municipality and town in the south of the Netherlands, in the province of North Brabant.</p>
    </div>"
      >
        Zundert, Netherlands
      </a>
    </div>
  );
}
