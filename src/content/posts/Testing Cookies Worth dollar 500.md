---
title: "Testing Cookies worth $500 🍪 "
description: "finding IDOR 💰"
date: 2021-06-30
tags: ["bug bounty", "security"]
---

> This is the post I wrote on Medium in 2021, [Here](https://sankalpa02.medium.com/testing-cookies-worth-500-8fc2310e6d7e)

Hey everyone, I’m Sankalpa Acharya from Nepal. A few weeks ago, I discovered an IDOR vulnerability that was worth $500 to me. So, let’s kick off my journey with this first bounty!

<b>Impact of Vulnerability</b>: Account Takeover

![meme image](https://miro.medium.com/v2/resize:fit:720/format:webp/1*6EDHjKgmaDsPCqHTmISX5g.png)

Before diving straight into the report, I have a tip for those who are struggling to get their first bounty. If you’re finding bugs on targets available in HackerOne and Bugcrowd, consider switching your target. Use Google dorks (inurl: /responsible-disclosure/ bounty) to discover some bug bounty programs because there is less competition, and as a beginner, that’s what you want.

Let’s Begin,

I have a bad habit of continuously changing targets without even proper recon. While searching for reports about SSO login vulnerabilities, I came across a website in my search results: ‘sso.example.io’ (can’t disclose the website name). This time, I had a strong gut feeling that I might find a vulnerability in this target.

![lord image](https://miro.medium.com/v2/resize:fit:640/format:webp/1*vkXlY-s6OR1nRC8Jej6AYg.jpeg)

I created two accounts there, at first I tested CSRF vulnerability but no luck :(

![another one meme](https://miro.medium.com/v2/resize:fit:640/format:webp/1*voB3YavZLrmCXUyQ3wFPxg.gif)

Then I went to test password reset functionality hopping any OTP code or token might get leaked in Referer header or in Response again no luck :(

Again:

![another one meme](https://miro.medium.com/v2/resize:fit:640/format:webp/1*voB3YavZLrmCXUyQ3wFPxg.gif)

With a slight trace of sadness on my face, I decided to observe the login flow of the website. I was hoping to discover JWT misconfiguration if the website used JWT tokens to identify users. I intercepted the request after entering my ID and password and clicked the ‘Login’ button, but there wasn’t much in the request. When I intercepted the response, I found that there was no JWT token or any other code in the response body :(

![Wait a Minute](https://miro.medium.com/v2/resize:fit:720/format:webp/1*LMPYr0jwneilA35Jyz3tMA.jpeg)

What identifies the user to the browser? Cookies, right? So, I began testing the cookies.

![burp](https://miro.medium.com/v2/resize:fit:720/format:webp/1*fLp0p63xrU2fsF3x8YgYxg.jpeg)

So, I replaced every cookie header one by one with those from my other account. There was a “Set-Cookie” header: example_token=token, which was identifying the user. I decided to delve deeper into this header. Within it, there were some random tokens separated like this → 1|random_string_and_integer|5-digit code|5-digit code|random_string_and_integer|. One thing that caught my eye was that 5-digit code because it was repeated in the header, and there was only one letter different from my second account.

![burp](https://miro.medium.com/v2/resize:fit:720/format:webp/1*NGAAkepzHmATqykdJSUsig.jpeg)
As you can see in the token header, a 5-digit code (47402) was being repeated, and my second account had the code 47403. So, I replaced that 5-digit code with my second account’s code, and… Boooooooom!!!! My second account was logged in. To be doubly sure, I replaced that code (47402) with 47401, and then I was logged into another user’s account from China. Yessssssssssss, I did it!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Then, I reported the vulnerability.

![thanos meme](https://miro.medium.com/v2/resize:fit:720/format:webp/1*s2ZHPoc20VcLoXuz-XP52A.png)

After few days I got response to my report

![email](https://miro.medium.com/v2/resize:fit:720/format:webp/1*RTOBZyrGrt_jVMZoKmU9eA.jpeg)

Follow me on twitter for more cybersecurity and Development Content. [sankalpa_02](https://x.com/sankalpa_02)
