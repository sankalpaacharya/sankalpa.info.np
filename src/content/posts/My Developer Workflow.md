---
title: "My Developer Workflow ⚙️"
description: "how i build things"
date: 2025-02-05
tags: ["workflow", "linux"]
---

During 2022 I shifted from windows and started using ubuntu as my main operating system. Before that I was using VM, WSL on windows and I was using it mainly to play CTF's. My workflow has evolved over the years and has been quite a journey. In this blog I'm going to share my developer workflow - how it looks like as of now (but it can be a lot different in future, I will try to keep updating things here in this blog).

## Shift from gnome to i3

I was going through different linux subreddits and I came across this subreddit called [r/unixporn](https://www.reddit.com/r/unixporn/). Seeing those beautiful looking desktops I was so impressed and I learned a holy word everyone was using called [ricing](https://www.reddit.com/r/unixporn/comments/3iy3wd/stupid_question_what_is_ricing/). While most setups looked amazing, the ones using i3 really caught my eyes - they were minimal, keyboard-driven. At this point I just wanted to make my ubuntu look the same. I saw some people talking about i3 window manager and thought to give it a shot. I quickly installed i3. I was excited to try it out, so let's change our gnome desktop environment to i3 window manager. The excitement lasted until my first login when... hold on? why isn't there any buttons? how do I open any application here? After spending hours trying to configure i3, I felt overwhelmed. To achieve the clean, minimal setup I had seen online, I realized I needed to install and configure multiple components like i3-gaps, a terminal emulator, and differnt application launcher. The amount of effort required seemed daunting, so I reluctantly switched back to Gnome

It wasn't long before, while trying to customize gnome to at least look better, watching youtube and taking help of GPT, I ended up messing with some system files and had to reinstall my operating system (classic linux newbie moment, right?).

<img src="https://i.imgflip.com/9jivod.jpg"/>

While searching for better ways to streamline my workflow, I stumbled upon [primeagen](https://www.youtube.com/watch?v=bdumjiHabhQ&t=91s) on youtube. He wasn't just showing off a pretty desktop - he was demonstrating a complete developer workflow using i3, tmux, fzf, neovim etc. As a senior software engineer with real-world experience, his videos seemed pretty convincing to me. Seeing him fly through code made me realize maybe this wasn't just about making things look good - it was about building a better development environment. Now I actually wanted to use i3, this time my focus was more on better workflow than beautiful UI. I also wanted to rice it but without falling into the deep hole of ricing linux because you will never be satisfied with ricing linux.

<img src="https://i.imgflip.com/9jiw26.jpg"/>

### [i3](https://i3wm.org/)
I3 is a tiling [window manager](https://wiki.archlinux.org/title/Window_manager), unlike gnome desktop environment or windows. In i3 your windows are not floating around but rather take the full space of the screen and tile to each other. 
<img src="https://i.imgflip.com/9jj5d4.jpg">

Since i3 is just a window manager and not a desktop environment, it doesn't come with a lot of things by default. You don't get a beautiful status bar where you can increase and decrease the volume and brightness, no quick UI to connect to wifi, or application launcher showing application icons.

<img src="https://i.imgflip.com/9jj8bt.jpg">

While i3 does have its own status bar and dmenu, they look quite ugly. That's why I've used [polybar](https://github.com/polybar/polybar) as my status bar and [rofi](https://github.com/davatorium/rofi) as my application launcher.

So WHY USE i3?

I have set up my i3 workspace in such a way that my `ws1` always has browser, `ws2` always has terminal and `ws3` always has vscode. If I want to use browser I simply press <kbd>mod</kbd>+<kbd>1</kbd>, if I want to use terminal <kbd>mod</kbd>+<kbd>2</kbd> and <kbd>mod</kbd>+<kbd>3</kbd> for vscode. It is really helpful because I don't have to <kbd>Alt</kbd>+<kbd>Tab</kbd> and keep searching for the window I wanna work with, this significantly increases the productivity.

### [tmux](https://github.com/tmux/tmux/wiki)
<blockquote>tmux is a terminal multiplexer. It lets you switch easily between several programs in one terminal, detach them (they keep running in the background) and reattach them to a different terminal. </blockquote>

Since I spend a good amount of time in the terminal, I wanted a smoother workflow. I often found myself constantly switching between different projects or other CLI tasks. Typing `cd` repeatedly to navigate between directories and then switching back to where I was felt annoying—I wanted a way to keep everything open and quickly jump between them.

Let's say I'm working on two different repos `frontend` and `backend` and I wanna keep switching between projects or for some other cli stuff. I can easily detach and reattach those sessions and start working from where I had left, for this tmux is really helpful. To create a tmux session I use [tmux-sessionizer](https://github.com/ThePrimeagen/.dotfiles/blob/master/bin/.local/scripts/tmux-sessionizer) which helps me create a new tmux session with the directory I'm trying to open. 

### [vim](https://en.wikipedia.org/wiki/Vim_(text_editor))
I don't use [neovim](https://neovim.io/) as my main IDE, I still use vscode with vim extension installed on it so that I can be comfortable using vim. I use neovim if I wanna quickly write some program or when I'm working with a single file. I use the preconfigured neovim called [lazyvim](https://www.lazyvim.org/). But I also wanna try other neovim configs like [nvchad](https://nvchad.com/) or [astronvim](https://astronvim.com/) before I start writing my own neovim config from scratch.

## Closing Thoughts
I found it quite useful to spend some time setting up things to improve my workflow. If I'm spending most of my time writing code and learning things, why not spend some time setting up things so that I can have a better development workflow? This is my workflow as of now but I have so many things to add. Your workflow can be a lot different than mine but it is not about copying the workflow of others but rather making one which can suit your way of working and can be helpful for you ❤️.

My [dotfiles](https://github.com/sankalpaacharya/dotfiles/)