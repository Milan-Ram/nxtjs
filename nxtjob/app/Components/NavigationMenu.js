"use client"

import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';

const NavigationMenuComponent = () => {
  return (
    <NavigationMenu.Root className="relative flex justify-center z-0">
      <NavigationMenu.List className="center shadow-blackA7 m-0 flex list-none rounded-[6px] bg-white p-1 ">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-[#212121] hover:bg-[#F7F3FF] hover:font-[600]  hover:text-[#8246FD] focus:bg-[#F7F3FF] focus:text-[#8246FD] focus:font-[600]  group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[14px] font-medium leading-none outline-none ">
            Resume Builder{' '}
            <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
          <h3>Resume Builder Content</h3>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-[#212121] hover:bg-[#F7F3FF] hover:font-[600]  hover:text-[#8246FD] focus:bg-[#F7F3FF] focus:text-[#8246FD] focus:font-[600]  group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2  text-[14px] font-medium leading-none outline-none ">
            Cover Letter{' '}
            <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
            <h3>Cover Letter Content</h3>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-[#212121] hover:bg-[#F7F3FF] hover:font-[600]  hover:text-[#8246FD] focus:bg-[#F7F3FF] focus:text-[#8246FD] focus:font-[600]  group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2  text-[14px] font-medium leading-none outline-none ">
            Linkedin Review{' '}
            <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
            <h3>Linkedin Review Content</h3>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-[#212121] hover:bg-[#F7F3FF] hover:font-[600]  hover:text-[#8246FD] focus:bg-[#F7F3FF] focus:text-[#8246FD] focus:font-[600]  group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2  text-[14px] font-medium leading-none outline-none ">
            Interview{' '}
            <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
           
            <h3>Interview Content</h3>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-[#212121] hover:bg-[#F7F3FF] hover:font-[600]  hover:text-[#8246FD] focus:bg-[#F7F3FF] focus:text-[#8246FD] focus:font-[600]  group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2  text-[14px] font-medium leading-none outline-none ">
            Job Tracker & Networking{' '}
            <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
            {/* <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
              <ListItem title="Introduction" href="/docs/primitives/overview/introduction">
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              <ListItem title="Getting started" href="/docs/primitives/overview/getting-started">
                A quick tutorial to get you up and running with Radix Primitives.
              </ListItem>
              <ListItem title="Styling" href="/docs/primitives/guides/styling">
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem title="Animation" href="/docs/primitives/guides/animation">
                Use CSS keyframes or any animation library of your choice.
              </ListItem>
              <ListItem title="Accessibility" href="/docs/primitives/overview/accessibility">
                Tested in a range of browsers and assistive technologies.
              </ListItem>
              <ListItem title="Releases" href="/docs/primitives/overview/releases">
                Radix Primitives releases and their changelogs.
              </ListItem>
            </ul> */}
            <h3>Job Tracker & Networking Content</h3>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};

const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
  <li>
    <NavigationMenu.Link asChild>
      <a
        className={classNames(
          ' focus:shadow-violet7 hover:bg-mauve3 block select-none rounded-[6px] p-3  text-[14px] leading-none no-underline outline-none transition-colors',
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <div className="text-violet12 mb-[5px] font-medium leading-[1.2]">{title}</div>
        <p className="text-mauve11 leading-[1.4]">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
));

export default NavigationMenuComponent;