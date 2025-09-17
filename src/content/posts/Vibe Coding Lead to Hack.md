---
title: "How I Accidentally Hacked My College Vibe-Coded Portal"
description: "A funny little story of how I stumbled into hacking my college’s vibe-coded project portal"
date: 2025-09-12
tags: ["vibe-coding", "college"]
---

> Disclaimer: This story is shared purely for educational purposes. Sensitive details have been generalized to prevent misuse. The issue was responsibly reported to the concerned authorities and has since been fixed. My only intention is to highlight the importance of basic security practices, not to blame or defame anyone.

From Minor Project to Major Chaos,

This is the fun little story of my college. A few months ago, our college asked 7th sem students to work on a minor project. Usually, professors provide a list of project topics under their theme, and students form groups of 2. Whoever is interested goes to the faculty and asks them to assign a project. It’s usually first come first serve.

But this time, the college wanted to move the process online and asked the university students to build the portal. We got an email to log in and submit a request for a project. The moment I saw the site, I knew it was vibe coded at least the UI. Which honestly makes sense, cause I wouldn’t want to put in that much effort alone either. The problem wasn’t using AI, it was not caring about the basics and just letting things slip. The whole site felt like “if it works, ship it.” So I said huh, nice, and opened the network tab after logging in… and damn.  

I saw all professors’ and students’ emails in plain JSON. The page was fetching everything project info, faculty details, and even the list of students who requested each project. None of this was shown in the UI, but the data was just sitting there: emails, roll numbers, profile photo links, all of it.

I kept digging, and it got worse. Update endpoints were wide open anyone could update anything, no backend checks on who was making the request. All student user_ids were exposed, so I could literally swap an ID in the request and update someone else’s info. There was even a password hash in the JSON. No Rate limitting you would brute force anyone password as when intially college gave email and password, it followed a pattern for password and portal was using same college email and password to authenticate students, so simple brute force on login page would give me a password of students if they have kept default. Tested on friend of mine with his permission and it worked. Like… TF? Too much chaos. 

<img src="https://i.ibb.co/XkfLH4qs/Untitled-design-5.png"/>

I tested changing profile slugs, and suddenly if I clicked on someone’s profile, it redirected to another profile. The site was completely messed up. I told my friend, “yeah this is broken af,” and then wrote an email to the authorities explaining everything. I also told them I was ready to help if needed. The site was taken down for maintenance. Funny part—deadline got extended, my friends were happy, I was happy.  

Next morning, I made a LinkedIn post showing how pure vibe coding can be a disaster.  

<img src="https://i.ibb.co/Yn2QBnT/linkedin.jpg" width="500"/>

My only intention with the post was to explain how blindly vibe coding can be dangerous. I was already in touch with a professor, and we had planned to meet so I could help the portal dev fix the issues.

But the post started creating random buzz “someone hacked college site and posted on LinkedIn.” I was in class when another professor called me and said the department head wanted to meet. I went, and I was asked to remove the post because it was defaming the college. HOD told me I did wrong, that I shouldn’t demotivate juniors or post stuff like this publicly. At first, I didn’t want to remove it, since my intention was educational and not malicious. I started arguing as well. But then came the threat: if I don’t take it down, I’ll be suspended.

So yeah, I apologized, removed the post, and helped the developer fix the site.

Thanks for reading ✌️
