---
title: "My Developer Workflow ⚙️"
description: "how i build things"
date: 2025-02-05
tags: ["workflow", "linux"]
---

During 2022 I shifted from windows and started using ubuntu as my main operating system. Before that I was using VM, WSL on windows and I was using it mainly to play CTF's. My workflow has evolved over the years and has been quite a journey. In this blog I'm going to share my developer workflow - how it looks like as of now (but it can be a lot different in future, i will try to keep updating things here in this blog).

## Shift from gnome to i3

I was going through different linux subreddits and I came across this subreddit called [r/unixporn](https://www.reddit.com/r/unixporn/). Seeing those beautiful looking desktops I was so impressed and I learned a holy word everyone was using called [ricing](https://www.reddit.com/r/unixporn/comments/3iy3wd/stupid_question_what_is_ricing/). while most setups looked amazing but the one using i3 really caught my eyes- they were minimal, keyboard-driven. At this point I just wanted to make my ubuntu look the same. I saw some people talking about i3 window manager and thought to give it a shot. I quickly installed i3. I was excited to try it out, so let's change our gnome desktop environment to i3 window manager. The excitement lasted until my first login when... hold on? why isn't there any buttons? how do i open any application here? After exploring for a few more hours I was ready to give up. So you're saying to make my application look that good I have to spend a week to install i3-gaps, terminal emulator, rofi and configure everything? So I gave up and rolled back to gnome. 


It wasn't long before, While trying to customize gnome to at least look better, watching youtube and taking help of GPT, I ended up messing with some system files and had to reinstall my operating system (classic linux newbie moment, right?).

<img src="https://i.imgflip.com/9jivod.jpg"/>

During this time of frustration, I stumbled upon [primeagen](https://www.youtube.com/watch?v=bdumjiHabhQ&t=91s) on youtube. He wasn't just showing off a pretty desktop - he was demonstrating a complete developer workflow using i3, tmux, fzf, neovim etc. As a senior software engineer with real-world experience, his videos seems pretty convincing to me. Seeing him fly through code made me realize maybe this wasn't just about making things look good - it was about building a better development environment. Now I actually wanted to use i3, this time my more focus was on better workflow than beautiful UI I also wanted to rice it but also not falling into the deep hole of ricing linux beacuse you will never be satisfy with ricing linux.

<img src="https://i.imgflip.com/9jiw26.jpg"/>

### [i3](https://i3wm.org/)
I3 is a tiling [window manager](https://wiki.archlinux.org/title/Window_manager), unlike gnome desktop environment, windows i3 is a lot more different from it, in i3 your windows are not floating around but rather it takes the full space of the screen and til to each other. 
<img src="https://i.imgflip.com/9jj5d4.jpg">

i3 is just a window manager but not a desktop environment so it doesn't comes with lot of things by default, like you don't get beautiful status bar from where you can increase and decrase the volumne and brightness, quicky open UI to connect to the wifi or application launcher which shows the application icons.

<img src="https://i.imgflip.com/9jj8bt.jpg">

 i3 does have the status bar and demu but they look quite ugly so for that i have used, [polybar](https://github.com/polybar/polybar) as status bar and [rofi](https://github.com/davatorium/rofi) as application launcher.


 So WHY USE i3 ?

I have setup my i3 workspace such a way that my `ws1` always has browser, `ws2` always has terminal and `ws3` always has vscode so that i don't have to <kbd>Alt</kbd>+<kbd>Tab</kbd> and keep searching for the window I wanna work with, this significantly increase the productivity.


### [tmux](https://github.com/tmux/tmux/wiki)
<blockquote>tmux is a terminal multiplexer. It lets you switch easily between several programs in one terminal, detach them (they keep running in the background) and reattach them to a different terminal. </blockquote>

Let's say I'm working on a two different repo `frotnend` and `backend` and i wanna keep switching between project or for some other cli stuff. I can easily detach and reattach those session and start working with from where i had left, for this tmux is really helpful. To create a tmux session i use [tmux-sessionizer](https://github.com/ThePrimeagen/.dotfiles/blob/master/bin/.local/scripts/tmux-sessionizer) which helps me create a new tmux session with the folder I'm trying to open. 
