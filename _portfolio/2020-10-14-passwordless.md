---
layout: single 
title: "Why a passwordless future is closer than you think"
date: 2020-10-14
header: 
  image: /images/Rubica-passwordless-authentication-.jpg
---

*Originally published on the Rubica blog.*

In the days when computers cost as much as cars and houses (and were about the same size as a room), people had to share equipment and it became important that files were only accessible to authorized users. MIT security pioneer Fernando “Corby” Corbató solved this problem with the password in the 1960’s. From their inception, passwords were far from perfect but they were simple to implement, quickly becoming the go-to method for computer security in both home and office. Though passwords were first implemented in the 1960’s, hacking as we understand it today didn’t really appear until the 1980’s. However, the present-day threat landscape is an entirely different story that probably needs a more robust solution than a static password.

<img src="{{ site.url }}/images/secure-password.jpg" alt="">


__The inherent flaws in passwords__

Among some of the inherent flaws in passwords: they can be easily shared, stolen, or guessed. The evolution of malware forces each user to balance the need for having short passwords that are easy to remember but easy to guess against having long ones that are harder to crack—but harder to remember.

Recent data suggests the average email address is associated with 130 separate accounts, so a user will often choose passwording shortcuts or will simply reuse some variation of the same password. Even if you are more tech-savvy and use a password manager, use long randomly generated passwords, and never reuse passwords, there is nothing to protect you from having your credentials compromised by a data breach—it just means data hunters can’t reuse that password on other sites.

Luckily for all of us, there is a new trend in security that may lead to moving away from password-based authentication entirely.

__How passwordless authentication works__

Passwordless authentication relies on public key cryptography. Public key cryptography uses a private key combined with a public key. The private key is never shared, but the public key is shared with the website. Authentication happens when the website sends you a very large random number to encrypt with your private key, then the website decrypts it using the public key. It works because the public key is only able to unlock things that were locked with the private key, therefore confirming your identity.

<img src="{{ site.url }}/images/password1.png" alt="">


Public key cryptography is the theory behind this authentication method, but a couple of other pieces (like an API) are needed to make this work in practice. An API is like a waiter in a restaurant: as a customer of the restaurant you are not allowed inside the kitchen, however you are provided with a menu that tells you what the kitchen has available. Next, you place an order with the waiter (the API) which then delivers what you ordered back to you. This is the function of an API, in a nutshell. Embedded JavaScript code on websites use the WebAuthn API (the waiter) to create or get credentials (from the customer) when you want to either sign up or log into a website. The browser then hands this request off to the authenticator, which is the last piece of the puzzle. The authenticator is what generates and secures your private and public key pairs and where the challenge received from the website is encrypted.

Secrets like your private key, fingerprint data, facial recognition, or PIN are only ever shared with the authenticator and never shared with the website on the other end. Authenticator confirms your fingerprint and then passes back the encrypted challenge to the browser which sends it back to the website, and by extension, to the web server. If the server then successfully decrypts the challenge with your public key it authenticates you and allows you to login. From your end you would most likely only see a login button and nothing else, like typing in any passwords or usernames.

<img src="{{ site.url }}/images/password2.png" alt="">


__How far away is a passwordless future?__

Passwordless authentication would mean ditching usernames and passwords and replacing them with methods like biometrics (i.e. fingerprints, facial recognition) or physical methods (i.e. Yubikeys or Titan hardware keys).

WebAuthn has recently been established as a new global standard by the W3C (World Wide Web Consortium) and has gained support by big tech giants like Microsoft, Google, and Mozilla. In fact, WebAuthn is currently supported by all leading browsers and web platforms. Even though WebAuthn promises to offer better security, there is no guarantee how fast—or if—people will embrace this new authentication method. This is often due to a combination of resistance to change from segments of the tech community and a misunderstanding of how the technology works from the general public.

While WebAuthn is not a silver bullet for all authentication issues in cyber security, it will certainly address a lot of the issues related to passwords and data breaches. It is also important to point out that like all new pieces of technology there are a lot of obstacles, questions and bugs left to be worked out, but being set as a W3C standard and getting support of major companies and web browsers shows that it is gaining traction.

It is exciting to think of the possibilities and the changes this technology will bring. The days where we no longer have to bother with fulfilling password requirements or remembering passwords might be closer than we think.