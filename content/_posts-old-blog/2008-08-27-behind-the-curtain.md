---
id: 461
title: 'Behind the Curtain: Comments and Spam'
date: '2008-08-27T10:23:49-07:00'
authorname: 'Mika E. (Ipstenu)'
layout: post
guid: 'https://jorjafox.net/blog/?p=461'
permalink: /2008/behind-the-curtain/
ljxp_comments:
    - '0'
ljxp_privacy:
    - '0'
tweetbackscheck:
    - '1259699419'
shorturls:
    - 'a:4:{s:9:"permalink";s:51:"https://jorjafox.net/2008/08/27/behind-the-curtain/";s:7:"tinyurl";s:25:"http://tinyurl.com/ns7lbn";s:4:"isgd";s:18:"http://is.gd/52Wdf";s:5:"bitly";s:20:"http://bit.ly/4wqYgt";}'
twittercomments:
    - 'a:0:{}'
tweetcount:
    - '0'
btc_comment_counts:
    - 'a:0:{}'
btc_comment_summary:
    - 'a:0:{}'
astra_style_timestamp_css:
    - '1634381415'
categories:
    - 'The Site'
tags:
    - misc
---

This post is about technical website things and a why we decided to go the way we did.  In short, we are able to stay so spam free thanks to <a href="http://akismet.com/">Akismet</a>, <a href="http://www.bad-behavior.ioerror.us">Bad Behavior</a> and <a href="http://www.projecthoneypot.org">Project Honey Pot</a>. Also, if you want an avatar by your name when you comment, check out <a href=http://www.gravatar.com/>Gravatar.

<!--more-->

When I reopened the blog, and killed the forums, after the site nearly died last October, one of the things I decided was to make the site open comment. After the woes we'd had with sign ups, and people forgetting passwords, and people making multiple accounts to troll (really, I don't mind if you don't like Jorja, just don't be an ass about it), it seemed both bold and dangerous.  No more would people need to sign up and remember yet another password to share their thoughts.  They could just provide a name and email address, and anyone admin-ing the site could monitor them by those or their IP address.  We tossed in <a href=http://www.gravatar.com/>Gravatar, so people could feel more like the individual they were.

Since then, the Writers Guild of America went on strike, and the news about Jorja died down.  That gave me the chance to do a lot of tweaks to JFO, including the green design we're wearing now, as well as clean up a lot of the code to make the site run a bit faster and not abuse our bandwidth allotment. This proved smart when it was revealed Jorja was going to be back for Season Nine.  We didn't even ping on the crash-o-meter.

And through it all, three (I kept track!) spam posts got through my defenses, and only one real post was marked as spam.  This is in part from <a href="http://akismet.com/">Akismet</a>, a Wordpress Plugin which has (since October 2007) stopped 2,328 spam posts by checking posts against a blacklist which is constantly being updated by every Akismet user, based on how they mark comments as spam or not-spam.  Now, Akismet is used by a lot of blogs, and you may notice that a lot have spam.  To add an extra layer of protection, I use <a href="http://www.bad-behavior.ioerror.us/">Bad Behavior</a>, which catches about 1000 'bad' visitors a month by checking to see if they're real people or programs.  You should never notice it running.

My final layer of protection isn't protection at all, but attacking. <a href="http://www.projecthoneypot.org">Project Honey Pot</a> is built into JFO and is used to trap email harvesters from finding your emails and sending you spam.  When a harvester uses the sneaky honey pot links that are hidden all over the site, they are actually sent to a master list of email harvesters, and subsequently banned from being able to send you spam email.  Honey Pot is adding in new features to attack spam-bots from posting comments as well, and is integrated with Bad Behavior.

So for those of you who weren't bored to tears when you read this, I hope you enjoyed a peek behind the JFO curtain. We're always trying to make the site easier for you to navigate, without sacrificing your inbox to the spammers.  If you guys ever have questions about it, or suggestions for something you'd like to see, give me a shout.
