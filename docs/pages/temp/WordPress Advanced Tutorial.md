Welcome to Learn It Training. The exercise files for today's course are located in the video description below. Don't forget to like and subscribe hello everyone, my name is Trish Connor Cato.

Welcome to the WordPress video course and we'll begin this course by using the blog site we created in the WordPress beginner course. Securing your site is of the most importance and you will learn how to apply the principles of WordPress security to your site. Security is so important we will cover it thoroughly in the first of the six modules in this course.

The second module will be dedicated to learning factors to consider when you're choosing a theme for your site before locating and installing themes for your website. The theme is an important part of the user experience as it controls most of the appearance of your website. In module three, you'll learn ways to further customize the appearance and design of your website by customizing menus, using widgets, learning to use the WordPress customizer, and finally exploring AMP accelerated mobile Pages plugins to enhance the user experience when they're accessing your site from a mobile device.

Now this course is designated for Anyone new to WordPress or who is self taught on the product. You would gain from taking this course. You don't need any prior web development or programming skills.

It's designed for non technical users who are more interested in content management and search engine optimization than the technical aspects of website creation. Looking to support our channel and get a great deal? Become a member today to unlock Ad Free videos. That's right, your favorite courses without a single ad.

Interested in a specific video? Purchase one of our Ad free courses individually looking for even more Gain access to exams, certificates and exclusive content at learn@antime.com More information can be found in the video Description below. Module 1 is all about securing your WordPress website.

Now I should mention that this slide deck is in the video description. It has some good information in it for your future reference. So this module has a total of seven lessons and I'm going to divide them into two groups.

So the first three lessons are in group one and this is going over the principles of WordPress security and then you'll learn best practices for WordPress security and then after that you'll learn some security plugins that can be used to help secure your website. And after that we'll go ahead and put these principles and practices in action on our site by grabbing those plugins, activating them and upping the security on our website. The second group of lessons deal with user accounts so when we get to the second group, you'll learn how to set up secure user accounts, you'll learn about user roles and abilities, how to manage users, and then we'll use some user management plugins that can help you manage your users.

So let's start by reviewing the principles of WordPress security. I have about five of them in this slide deck. So the first one is integrity, and that means that you ensure data is not tampered or altered by unauthorized users.

Your hosting provider has some responsibility as the files and database are on their servers. So you want to look for a host that offers up to date server software, malware monitoring and removal, firewalls and other security measures. Making sure that you get all of your WordPress plugins and themes from trusted sources lends itself to integrity on your site.

You want to avoid them if they haven't been updated over the last year or more, have less than a few hundred installations, or receive low ratings. And I've included on this slide links to two different WordPress.org sites where you can find the approved plugins and the themes.

Another way to ensure integrity on your site is backing up your site. Your host may offer backups, and WordPress itself includes the Updraft plus plugin which you can use for backups. The second principle is availability, and this means that you ensure systems and data are available to authorize users when they need it.

Using solid hosting with good uptime is one way to ensure this. Your host should have measures in place to reduce the damage of denial of service and distributed denial of service attacks. These are attacks in which your web server is inundated with traffic in an attempt to knock your site offline.

Not only do you need to have backups, you need the ability to restore the backups when you need them. And ensuring users can access what they need requires that the site be online and that users have appropriate permissions. The next principle is minimize Attack Surface.

The attack surface describes all of the different points where an attacker could get into a system and where they could get data out. For a WordPress website, that means all the software that makes up your website, the data it contains, and the ways the software and data can be accessed. So one way is to remove unnecessary plugins, themes and users from your website.

And by the way, deactivating plugins and themes is not enough. You would also need to delete them to minimize attack surfaces Surface and you would want to check your web server for unnecessary files via your hosting provider's file manager system. We have two principles left.

This one is defense in depth. The principle of defense in depth means that you have multiple layers of defense. Even if a hacker gets through one or more layers, there are other layers that will stop them.

Your web host should have multiple layers of security. If you're not comfortable with your host security, you can consider a WordPress security plugin as well. Our last principle is confidentiality, and it simply means that you only allow access to data for which the user is permitted.

You would ensure that legitimate users can only access as much as they need to, and illegitimate users cannot access anything. Ways that you can do this are by using strong passwords and two factor authentication. Cryptography is a tool to protect confidentiality as well.

You encrypt data and only authorized users can decrypt it. When you add SSL TLS to your site, that encrypts data flowing between the user's browser and the web server. Don't save your WordPress password in an unencrypted file.

An access control protects confidentiality. Each person who needs access to your site should have their own separate WordPress account, and confidentiality in WordPress acts off of the principle of least privilege. Do not grant a user account, process or program more access rights than it needs to accomplish its designated task.

In terms of a typical WordPress website with a blog, think of your editors, authors, contributors and subscribers. Each of them needs access to more or less of your website's back end. The principle of least privilege is also known as the principle of least authority, the principle of minimal privileges, or the least privileged user account.

And you can also to ensure confidentiality and enforce user accountability, you can use an activity log plugin to keep a log of all the changes that users do on your WordPress website. It helps you with troubleshooting as well as with user accountability. So now that we have the principles of WordPress security behind us, just a reminder, this slide deck is in the files for the video description, so you can always reference it on your own.

We need to discuss best practices for WordPress security when we get hands on later in this module. In WordPress, we want to have these options under our belt and you'll see that when we start doing exercises we will be enabling some of these best practices. So best practices, you can see them here on the slide.

You want to have secure hosting. You know the host has the responsibility for a lot of your security. You want to be able to back up your website in case it's necessary to have to restore it.

You want to avoid certain usernames like admin, your real or Nickname anything based on personal information or or the title of your site. You want to have very strong passwords. You'll learn how to lock down your login page and you can enable two step authentication for further security.

You can also automatically log out idle users. Add security Questions to the WordPress login and have it scanned. Have your site scanned for malware and vulnerabilities.

You want to update themes and plugins and you'll see how that's done. I have the asterisk next to some of these items like disable file editing, disable PHP file execution, change WP database prefix, it automatically starts with WP underscore and also disable directory indexing and browsing. And that is because we're going to discuss those in more detail.

Just to expand on these best practices that I asterisk on the previous slide. Disable file editing can be done two ways. As well as disabling PHP file execution in certain directories, so disable file editing.

Within WordPress itself, you have a set of theme and plugin editors that you can use. Now, many WordPress users aren't programmers and will never use these editors. Hackers, however, can use the editor to execute malicious code or delete entire parts of your website.

So disabling that file editing function, if you're able to, and if you are not going to be editing any themes and plugins on your own through coding, it's wise to disable them. So again, there's two ways to do it. I will go over both ways with you when we get hands on now to disabling PHP file execution in certain directories, let's break it down a little bit.

PHP stands for hypertext preprocessor and it's a scripting language. Hackers can upload malware to your website in an attempt to break in. Disabling PHP in certain directories will stop the malware from running.

So it goes on to tell you about how There are multiple PHP files in your WordPress website and these files exist to allow users to enter in custom PHP code to execute on pages. So if you want to disable PHP file execution in certain directories, there is a link there that will show you the long way of doing it. But there is also another way that I'm going to show you to do it as well.

And both disable file editing and disable PHP file execution can be handled with a plugin that we're going to use on our site. Now at the bottom we have directory browsing and indexing. It means that People can view the content of the individual folders on your website.

So for you to see if directory browsing is disabled, first of all, this is what it looks like when it's enabled, you will have an index and it shows all of the folders, right? And so you may have been on websites where you can actually see that we want to disable that functionality there. And my hosting provider I'm using bluehost automatically disables directory browsing. If you want to check to see if it is enabled in your address bar, you can type your domain and in this example it's example.com

and then WP includes slash. So if you type that in and press enter, if you see a list of folders, it means that directory browsing is enabled. If it is disabled, you will see a forbidden page.

So when I use that in my browser's address bar with my domain, I get forbidden. And it was done at my host level. I didn't have to do anything to make that happen, meaning that it is disabled.

And last but not least, another thing that you can do as a security best practice is to change your WP database prefix. So everything is stored in your WordPress database, which means it is every hacker's favorite target. Spammers and hackers run automated codes for SQL injections.

Many people forget to change the database prefix when they install WordPress. This makes it easier for hackers to plan a mass attack by targeting the default prefix, which is WP underscore. So you can change your database prefix and you can do that while you're setting up your site.

But if your site is already established, you can do it after the fact as well. Now, I have a link on this page that will take you to step by step instructions. I'll show you part of the way of doing this, but if you want to do this on your own, you can follow these instructions from the link on the slide.

Now, my hosting provider has also automatically done this for me, so I don't actually have to go through this process. Sometimes you'll find that your provider automatically takes care of this for you. So the way that we are going to enable our security best practices is by using a variety of plugins, some of which are included in WordPress, Core and others we will actually go in and find and download.

So the plugins that we're going to be using, we're going to be using the free versions. Many of them have an upgraded premium version for a cost. So the first one we're going to use is updraft plus it comes with the WordPress core and it's going to be used to back up your site and also to restore your site if necessary.

Then we're going to use Sucuri Scanner, that's an auditing and monitoring system that keeps track of everything that happens on your site. And through its screens we will be able to disable file editing and disable PHP file execution. And then we have a series of plugins that we're going to use to lock down the login page.

We're going to use limit login attempts reloaded to limit the number of login attempts. Miniorange 2 Factor will set up both two step authentication and it has the ability to ask security questions on the login screen. There are a bunch of separate plugins for two step authentication.

There are plugins for security questions. This is one that includes both components. We're going to use inactive logout to automatically log out inactive users.

We are going to use WPS hide login which allows you to change your URL to whatever you want. I actually have a link there where you can get all the information about how to use it. We will discuss it when we get hands on and you'll see the difference between that and something else that we're going to be doing.

And then we're going to use the WP activity log to log all user activity and you know, it ensures user accountability. And then Jetpack is also one that's included in the core and that's overall security and it includes Akismet anti spam to get started. This is my site as I left it at the end of the WordPress beginner course.

So it is a simple blog site. It doesn't have a lot of posts, it doesn't have a lot of pages, it has some media and already has a theme applied to it. I'm going to start this by giving you a brief tour of my site in case you didn't take the beginner course and build this site so you'll know the starting point that we're working with in this course.

Now later in this course we're going to change this from a blog site to multiple different kinds of websites as you saw in the course description. So for right now it's a blog site only. And on the left I'm going to start by going to my pages and you can see that I have an about me page which is my front page.

I have an articles page which has links on it and I have a blog page where my blog posts show Up. That's it. This privacy policy page comes by default.

I haven't enabled it at all. So those are the three pages that I have now, just to get a quick view. My site has not been published.

If anybody goes to my URL, they just get Coming soon at this point. So you see my site status up here coming soon. This is my About Me page.

I have some media there, picture there that is not my garden. I wish. And you'll notice as I scroll down, at the bottom there's a search box.

This is all part of the theme that I have selected. It's showing the recent posts, any recent comments, and then I actually have a secondary menu that shows at the bottom based on my categories. So I can go to vegetables down there and get my category page, which also I have assigned pictures to categories.

And so both of my posts have all three of my categories attached to them. They're just generic posts at this point. Now at the top I have my main menu, which if I want to go back to that about me page, I can also go to my blog page from here, from the main menu and it just shows my blogs.

And then I have that articles page, which I said has some links on it that open in a different window to articles about gardening. And now I'm back on my site and I'm on my post page. And I just want to point out again, if you didn't take the beginner course because of the resolution I need to use for this video, for some reason my post page is weird.

So all of these options, like I'll go back to my pages page. When I hover over a page, you see these edit, quick edit, trash, view, blaze options on my post page. They are vertical.

Well, they're horizontal, but it's just kind of skewed because of my resolution. But I only have a couple of posts, as you saw on my blogs page. Then I'm going to go over to categories and in the beginner course, we added all of these categories.

We made some of them hierarchical. So under fruit, for example, is strawberries. Under herbs, there's basil, cilantro, mint, so on and so forth.

And we actually added some media representing those things. I used a question mark for the uncategorized category. And you can see that I have the vegetables category.

That's the picture that shows up on the vegetables category page. And then each vegetable in the hierarchy has its own picture. And I'm going to just go here to appearance.

And the theme that I'm using on this is called the 2021 theme which you saw has the two menus, the primary and then the secondary menu at the bottom of the page. And lastly and I included this in the files for the video description, all the media that I used in the beginning course. So it's all in the files in the video description if you want to add them if necessary, to your Media Library in WordPress.

So the first thing we are going to do before we begin implementing our best practices for WordPress security is create a backup of our site. Now, WordPress Core comes with a plugin called Updraft Plus. So if you go to your plugins on the left and you scroll down, you'll see your installed plugins.

Updraft plus should be in that list and it may not be activated. So where mine says deactivate you may have an activate link to click on so that you can go through and activate it. And then you can go through its settings so that you can tell it where to store your backed up files.

So in my case you can store them locally. You can back up to Amazon S3 Dropbox. In my case I'm using Google Drive.

In Google Drive it creates a folder called UpdraftPlus where it stores my backups in it. There's more places that you can store as well. So if you need to take a moment, you can pause the video, go ahead and get your UpdraftPlus activated and set up to where you want to store your backups.

Now, while I'm still on the installed plugins page, going to direct your attention to the column where it's talking about automatic updates and you'll notice that my host bluehost automatically updates any plugins that I have. So from my blue hosting site my updates for all of my plugins are automatically enabled. And that's one of the things you want to keep an eye on because you want to make sure that you have the latest version of a plugin.

And that's mostly for security purposes. If you do not see Updraft plus in your list of installed plugins on the left sidebar, you can go to Add New under plugins and then you can just type it in the search box and it will give you if it's not already installed. That's why you would be searching for it here, it will give you an Install now button like on this WP Optimize 1.

Mine is already active, so active is dimmed out. But just so you know, you can always grab it again. It's a free version, but you can upgrade to Premium if necessary.

Now, once you have it installed and activated and you've gone through the settings, you should have updraftplus on your top toolbar to the right of your need help? And you can look at that dropdown. You can go to Backup, Restore, Migrate, Clone Settings. I'm going to go to Backup Restore there, and all of those other options from that dropdown I can get to from the form of these tabs running across the top.

So the first thing I want to do is go to the Settings tab. So this is where you can set up your files backup schedule and your database backup schedule. It defaults to manual and it retains two scheduled backups for each type.

So you can change that for when you want your backups happen so everywhere from every two hours to monthly you can change it too for both files and database. And I would encourage you to give some thought to this. When do you want your backups to happen? Automatically.

And then now you know where to go, where you can set that schedule and how many backups it should retain. Now you would need to upgrade to Updraft Premium Updraft plus Premium if you want to fix the time at which a backup should take place, or if you want to take incremental backups or to configure more complex schedules. Here you can't set a time, you can just set a when and how many to retain.

If you scroll down on that settings page, this is where you get to choose your remote storage. You can see that mine is set for Google Drive, and underneath all of those options it lets you know that you would also need to upgrade to Premium if you need the ability to send a backup to more than one destination, you can do that through Updraft plus Premium. So here's my Google Drive information, so it's putting it in a folder called UpdraftPlus, which I'm fine with.

You would need to upgrade to Premium in order to set a custom folder name. I'm already authenticated with Google. I have a privacy blocker over my email there and as I continue to scroll down you'll see that it's including plugins, themes and uploads in the files backup.

I can add some exclusions if I want to add exclusion rules. So at the bottom it's offering you Premium so you can have encryption on your database backup. You can have a email sent, a basic report sent to your site's admin email address, which I have blocked there.

And then you have some expert settings that you can go Over. So I'm back on the Backup Restore tab and I'm going to just show you my last log message. I deleted a file a little bit earlier today, so that's what's showing there.

Just a little while ago, actually, I deleted a backup file. So I have my last log message showing that I have a previous backup that's in my Google Drive. So this leads me to, let's say something awful happens to your site and you have to restore it.

You come right here and you can get to your restore button right there and then you'll be able to choose what you want to restore. So I'm going to scroll back up just a little bit and I'm going to click on that blue Backup now button and it brings me to perform a backup dialog. By default, include your database and your files in the backup and sending the backup to remote storage are checked and then you have the option of checking only allow this backup to be deleted manually.

So in other words, keep it even if retention limits are hit. So I'm going to leave the default checkboxes and click on Backup. Now you'll see that it's creating the file backup.

It's going to run that process and upload files to remote storage. So to give you a brief pop up letting you know that the backup is done. And when that disappears, your last log message is updated.

It apparently succeeded and it's now complete. And if I scroll down, I have my limit set to two, so I have my two backups. So what happens if I do another backup? The earliest one would automatically be rolled off of there.

My March 22nd one would roll off of there because I have a limit set to two to retain. So now that we've backed up our site, it's safe to go ahead and do some of the other things that we want to do for our site security. So this is my UpdraftPlus folder in my Google Drive.

And you'll see so I'm retaining two backups. You can see the dates. This is the first set of backups.

These are the ones that I just did. And so you have different files for each date. This is uploads, if you hover over them, themes, plugins, others, and then the database itself.

So that's how it looks in Updraft plus folder in Google Drive. So two of our best practices are disabling file editing and disabling PHP file execution. And there are ways that you can manually do both of those things by editing some of the files from your host File manager or you can use a plugin to do both of those things.

Now, we're going to ultimately end up using the plugin, but I just want to show you how you would do it. We'll focus on disabling file editing first. So if I hover over appearance on my left sidebar, you'll notice that there is a theme file editor and I can click on that theme file editor.

It gives me a heads up here. So you appear to be making direct edits to your theme in the WordPress dashboard. It is not recommended.

Editing your theme directly could break your site and your changes may be lost in future updates. If you need to tweak more than your theme css, you might want to try making a child theme. If you decide to go ahead with direct edits anyway, use a file manager to create a copy with a new name and hang on to the original.

That way you can re enable a functional version if something goes wrong. So I'm going to say on this one I understand, but I'm not going to touch anything in here. So it's showing me what theme I'm in, right? And I can literally come in here and start playing around with this code.

Or worse than that, a hacker can do it. And so this is why you would want to disable file editing so that you don't have the ability, especially if you're not used to coding, you don't want to come mess around in here not knowing what you're doing. And there's a plugin that will disable this for you.

So that's your theme editor, right? But you also have under plugins, you also have a plugin file editor. So this is the same thing. I'm getting a heads up here on this one, I'm going to say go back and it put me back on that theme one.

So I'm going to just click on themes under appearance to get out of that editor. So the way you would disable it by modifying a specific file is you have to go to your host site. So in my case on the left, I can just click on bluehost and click on home there.

And then I can do the menu to get to the bluehost control panel by clicking on that icon. And so again, my hosting provider is bluehost. Most hosting providers have access to their file manager.

I can only speak to bluehost right now. So on the left side I'm going to click on Advanced and it takes me to what Blue Host calls it cPanel, right on the Left side, under Advanced, I'm going to click on File Manager. And this is where you're seeing everything that's in your website.

This is how it is organized in the bluehost File Manager on my end. So if I wanted to disable file editing, I would have to modify a file that is called wp config.php and that file would be found in my public HTML folder.

So on the left side I'm going to click on that folder and so I actually double clicked on it so you can see the contents of that folder. And so again, the file that we would be looking to edit here is called WP dash config. Php.

Now, before you edit any of these files, you would want to create a backup of the file. So I'm going to walk through the steps of what you would do if you wanted to do this manually. I'm not actually going to do it and you'll see how I'm going to do that in just a moment because we want to use a plugin to do this.

But to create a backup of this WP config.php file, I'm going to just right click on it and I'm going to copy it. Before I do that, if you're not seeing that file in your list on your publichtml folder, you may need to go up to Settings all the way.

This is in bluehost anyway, all the way to the right at the top there's Settings and you would want to check show hidden files and then save that. And if you go into that directory again, it should show that file. So once you have that WP hyphen config.

PHP file, I'm going to right click on it and I'm going to copy it. So it wants to know where I want to copy it to. Well, I have a folder in here called Etc.

And this is just temporary for me because I'm not really going through with this. So I'm going to just select everything that's in there for public HTML I'm going to do the slash and then etc. If my fingers are on the right keys and then another slash and I copy that file.

So now on the left I'm going to double click my Etc folder and you see I have that wp config.php file in there. Now this one, if I change this one, it's not going to impact anything.

It has to be in that public HTML folder. So I'm going to make believe that I was really going to change this in that folder, which I'm not going to do. I'm going to right click on it in my Etc folder and choose Edit.

So it lets you know that you should back up the original file before you do this. It lets me know that I'm editing this file that's in the Etc folder as opposed to the public HTML folder, because I really don't want this to go into effect. And I'm going to just choose Edit at the bottom.

So it brings me into this file with this PHP code in here. And if I wanted to disable file editing, what I would do is I would go to the very bottom of this file. So in my case it's bringing me to like line 102 would be the first blank line and I'm going to click there.

Now you see the slash asterisk, asterisk in the green text? That's a comment, meaning it doesn't execute. It's explaining what the code is going to do. So I like to comment code.

So I'm going to do a slash and I'm going to do two asterisks and then I'm going to type disables file editing. And at the end of that I have to do an asterisk and a slash to end the comment. So that shows up in green.

The next thing that I would type here is the actual code. And so I'm going to type the word define lowercase, open, paren, and I'm going to type a single apostrophe and it gives me two, and my insertion point is in between them. What we need to type inside of here goes in between those parentheses.

So in all caps, I'm going to type disallow, underscore file, underscore edit, and then I'm going to come out of that closing apostrophe or single quote you could call it, and I'm still inside the parenthesis. I'm going to type a comma and then the word true. And true doesn't have to be capitalized, it actually change it blue.

Once you type it, I'm going to come outside of the parenthesis, the closing parenthesis, and it needs a semicolon there. So if I really wanted to do this, I would do it in the WP config PHP file that is in your public HTML folder. This one is in my et cetera folder.

So it's not going to impact anything. So I'm going to go ahead and save my changes up here in the upper right. It lets me know I had success.

And then I can Close. So this one has been modified. Now we're going to do this via a plugin.

So this one that's in my Etc folder, I'm going to right click on it and I am going to delete it and I'm going to tell it to skip the trash and permanently delete the file. And I always verify I'm in the right folder, the Etc folder in my case, not my public HTML folder. And I'll confirm that deletion.

So if you wanted to do it manually, that's what you would have to do to disable that file editing. And that way if you go to themes or plugins, it won't have that editor option there for you. But again, we're going to do it via a plugin.

So I have the link in the PowerPoint with the steps for you to manually disable PHP file execution. And if you do it manually, that would require a change to another file here. So I'm going to just go to my public HTML folder and that file is called htaccess and so you would have to modify that.

We're going to use a plugin to do it. But the reason why I want to point out this file to you is that even if you don't see that. Htaccess file in your public HTML folder and you've gone to Settings and you said to show the hidden files and it's still not showing, you may have to take an extra step to get that file to show.

So I'm going to just show you that extra step again. We're going to disable PHP file execution by using a plugin, but if you ever have need to get to this file htaccess and it's not there, there's something you can do within WordPress to make that file show up. And that's what I'm going to show you now.

So back in WordPress, I would hover over Settings on the left sidebar and click on permalinks. Now, we're not doing anything here other than going all the way to the bottom and clicking on save changes. So if that.

Htaccess file is not showing in your hosting provider's file manager, you would come here to Settings permalinks, go to the bottom, click on save changes. Even though you haven't changed anything, it will give you a message here saying the permalink structure updated. And then if you were to go back to your file manager, that.

Htaccess file should probably be there. This is a tricky workaround if you need to access that file and it's not there, this is a way to make it happen. So I just thought you should know that.

So now we're going to go and get the plugin that we're going to use to disable file editing and PHP file execution. The name of the plugin is called Sucuri. It is not included with WordPress Core.

So underneath plugins I'm going to go to add new and then I'm going to search and it's S U C U R I S U C U R I And so you'll see that it's an auditing malware scanner and security hardening plugin. So security hardening, for example, would be something like disabling file editing and disabling PHP file execution. So since this doesn't come with WordPress Core, I'm going to go ahead and choose Install now.

And once it's installed I'm going to go ahead and click on Activate. Once you activate it, it takes you back to your installed plugins screen and you can see your security there. And also if you look at the bottom of your left navigation, you'll see security security.

And we can go to Dashboard from there. So when I go to look at the Dashboard, it's talking about WordPress integrity, right? It's letting me know that core WordPress files were modified. This might indicate a hack or a broken file on your system, right? Gives you all kinds of information.

And so it's showing. If I had audit logs, they would be showing here on the right. It's telling me that the site is basically clean, right? Not block listed.

Gives me some recommendations and then some WordPress security recommendations there. And here's your Disable file editing and prevent PHP direct execution. So it's making those recommendations there on that SUCURI Dashboard screen.

Go over to the Settings tab for Sucuri and you'll see here that you have your general settings, you have Scanner, you have hardening, and let's go to Hardening and this is where we can go to block the PHP files in execution in certain directories as well as disable file editing. So here's your block PHP files in the uploads directory, WP content directory and WP includes directory. If you wanted to block those, which is recommended, you could apply hardening.

So I'm going to go ahead and apply hardening to all three of those and be careful because it scrolls you. You notice you can revert to hardening if you apply it by accident. So, so, and Then I'm going to scroll down a little bit more and there's my Disable plugin and Theme editor.

So I'm going to apply hardening there as well. So this prevents you from having to go and modify those files as you're applying Hardening at the top, it will let you know. So the last one I did was the plugin and theme editor.

So it gives you that message at the top that it applied hardening there. I can close that because it has an X on it and take a few moments and go over the other tabs in there just so you can see the kind of stuff that can happen via Sucuri and so you can see that it is constantly monitoring and auditing your site for you and it can give you notifications and alerts. And so the other thing, because we use the hardening screen to harden our security by disabling both file editing and PHP file execution.

On the left sidebar, if I hover over appearance, you notice that Themes Editor is no longer on the list. The same thing would happen if we edited the file in our hosting site File Manager. So it takes away that editor so you don't accidentally stumble across it and be playing around in there and maybe breaking your site.

The same thing if you hover over plugins. Now the plugin editor disappeared from that menu as well. That is the result of the hardening that we did.

Before we get into how to disable directory browsing if it wasn't done by your host, I want to show you something else that you can do in WordPress to control some of the popups that show up on your various screens. So on the left side I'm going to go to my dashboard and notice in the upper right hand corner there is a screen options dropdown and when I select it, it opens up a panel. So some screen elements can be shown or hidden by using the checkboxes.

So do I want email marketing by Creative Mail? I'm going to uncheck that. I'm going to uncheck WP forms for right now. Not really using it.

I'm going to uncheck the Optin Monster. Let's see. I'll leave that on because I'm using Jetpack and Yoast SEO.

So we'll leave that. I'm going to uncheck quick draft WordPress events and news for right now and welcome, which you see that controls this pop up here. So I'm going to get rid of that.

I'll leave my site Health status. My at a glance up there, activity, stuff like that. So I can always modify this any way that I want.

But this just gets rid of some of the clutter on my screen when I'm working as an admin in my site. So I'm going to now collapse screen options so I don't have that panel showing at the top of my screen. And I'll mention if you did not watch the beginner course I have on different screens, you'll see a line from the Louis Armstrong song hello Dolly.

That's a plugin, a free plugin, and it's just for entertainment purposes. It doesn't do anything other than show lines from that particular song. Now on to disabling directory browsing.

So I showed you that my host disabled mine. So if I go to the URL that I had in the slide deck, it shows a forbidden page and that means that directory browsing has been disabled at my host level. If it hasn't been disabled for you, you still have to go to your host file manager in order to disable it.

So I spoke earlier when I was talking about disabling PHP file execution manually, that you would have to change the. HT access file. And I showed you that if that file is not showing in your public directory even after you're telling it to show hidden files, then you would need to go into your WordPress settings and go to permalinks and just save the changes even though you're not making any to your permalinks.

And that can create that. Htaccess file that you're seeing on my screen right now. Now this is also in the public HTML folder and the change that you would have to do here if you need to disable directory browsing is you would have to edit that file.

So like any other file here, you would want to make a backup copy of the file. And so I'm going to just right click on it like I showed you earlier and I'm going to copy it and I'm going to copy it to my Etc folder so I don't really have to make this change because it was done at my host level. And then I'm going to go to my etc folder and right click on the copy of the file and edit it so it gives me the warning.

And I'm going to go ahead and click edit. And by the way, if you go to Permalinks and you save the changes and it doesn't create that file, you would have to get in touch with your hosting provider. So if I needed to Which I don't.

I would go to the very end of this file, I'd put in a comment line and this is PHP in here. So I would put in a comment line and you just Anything that's green is a comment. So you see in here it starts with the pound sign, right? And then after the comment line I would have to just type in one line of code.

So it would look something like this. I do a comment and I would just say disable directory browsing and then I'd press enter and the line of code would be options dash and then indexes and that would be it. Now this line is already in here.

I said it was already set up by my hosting provider. So this is that line that's causing my directory browsing to be disabled. If that is not in your file and it's enabled then you would have to add it.

So what I'm going to do is I'm going to just delete the comment line and the line at the bottom. I'm going to just close this, I'm not saving the changes and I am going to delete that file from my etc directory and again I always check that it's the right directory and I'm going to skip the trash and permanently delete the file and confirm that. So that's how that process would go if it's necessary for you to do so.

So the next group of plugins that we're going to access have to do with locking down our login page, one of our best practices. So the first one is going to be limit the login attempts. And so on the left I'm going to just hover over plugins and go to add new and I'm going to search for this one and it's called Limit login attempts reloaded.

So by default WordPress allows unlimited login attempts and this can lead to passwords being easily cracked via brute force attacks. This particular plugin will block an Internet address and or username from making further attempts after a specified limit on retries has been reached. So it makes a brute force attack difficult or impossible.

Now before we install this, just want to point out some things on this screen. So you saw that earlier when I went to my themes screen I showed you that my hosting site does automatic backups of my themes. When you're looking at plugins, a few things that you want to note underneath it.

It will show you approximately how many active installations. So you're looking for plugins that have a lot of installations. You are also looking at when it was last updated.

Things that haven't been updated for years you might want to shy away from. And so it's letting me know here that this plugin has been untested with my version of WordPress. I have the current latest version as of April 2023 when I'm recording this video.

So this will help you out with that. Now these are things that are important in terms of like picking a plugin to use. Most of the plugins that you'll find on your site through here are approved, but some are not and they can sneak through.

So you want to be careful checking that additional information how many installations when it was last updated. You also have a more details link on it and when I click on that it brings up another screen. It gives you more information about the plugin.

On the right side you're seeing the version of the plugin when it was last updated. It says the WordPress versions that are required. It's compatible up to 6.11.

It is not showing my version, I have a later version. It's giving the average rating which is important. You'll notice that most of the reviews are five star reviews.

So that makes me secure in using this as long as it works with my current version of WordPress. So from that screen I am going to go ahead and choose Install now. And now that it's installed I will go ahead and activate it after I confirm my email address for security information from them and I press Continue.

It's asking me to activate the Premium version of this plugin. It lets you know that if you don't have Premium you can just say no thanks. I'm going to go ahead and click the no thanks link on your left sidebar.

If you look under Settings you'll see where Limit Login Attempts lives. And now that we've generated backups through UpdraftPlus that will be showing there as well under Settings. You can also get to it from down here in the same area where we access Security earlier.

And it brings you into its Dashboard. It's letting you know we have zero failed login attempts for the past 24 hours. You have Tools Help Global options, right shows you failed login attempts by country and total failed login attempts.

And of course at the top it's telling you to upgrade to their cloud app for enhanced protection, visual metrics and Premium support. So that's on the Dashboard tab. Go ahead and go to your Settings tab.

So under your general settings the first thing you'll see is GDPR compliance And it's a checkbox enabled thing and that stands for General Data Protection Regulation. So if you check the box, it makes the plugin GDPR compliant by showing a message on the login page. There are two links there.

There's a link to GDPR and a link that says read more where you can get additional information about that. But basically if you check that, it has default message in here that the user would see right? And that message is sufficient. Now you can also put in a short code there to link to your privacy policy page if you have one for your site, if you need specific language in it.

But just so you know, logging IP addresses for the purposes of security is an extremely widespread practice. It complies with standard security practices for websites, it is the default. And most if not all websites do this and it is legal to do without consent.

However, I am not an attorney and I pulled that information off of this read more link. So I'm going to just leave it unchecked here and then you will get notified to the email address that showed on the previous screen right after and it defaults to three lockouts. If you're comfortable with that, you don't have to change it to show top level menu items.

You would have to reload the page to see any changes. You have the option to hide a dashboard widget and to show the warning badge, which is a default. You would need to reload pages there to see the changes.

So now when I scroll down, I'll see the active app is local because I haven't upgraded to their cloud app, so it's just local. And then I have my app settings, right? The app absorbs the main load caused by brute force attacks, analyzes login attempts and blocks unwanted visitors. It provides other service functions as well.

So this is where you determine how many allowed retries are there after a failed retry. How many minutes are they locked out after the maximum number of lockouts occur or retries occur? In this case four on my screen, it can increase the lockout time to 24 hours, and then it's 24 hours until the retries are reset. So that is basically how this works based on the settings that you put here.

If you've changed anything here, just like other pages, you would want to go to the bottom and save your settings. So as you have the ability to always come back to this page, I would suggest that you change some of your local app settings so you can test it on yourself. Like maybe allow two retries, maybe five minutes of lockout, or Something like that, so you don't have to wait, you know, get rid of that 24 hours in case you really mess it up kind of thing.

And then, you know, test it. Once you test it, come back in here, make your changes to the way you really want it to be, and then resave your your settings. Now, the next plugin we're going to use that will help us lock down our login page is the Two Factor Authentication plugin.

Now, the particular one we're going to use allows for security questions, which will be our focus on setting up, but they also have other two factor authentication methods that you can use in conjunction with security questions or just by themselves. So this will protect against users using weak passwords and automated password guessing and brute force attacks. And the name of this plugin is Mini Orange.

I'm on the new plugins page, Install new plugins or add new plugins page and I'm just going to go to the search box and type in Mini Orange. It's all one word and so you'll see that you have two results. The one that's Mini Orange's Google authenticator, WordPress two factor authenticator is the one that we are going to install.

And once it's installed I'm going to go ahead and activate it and it invites us to get started with its wizard. So I'm going to go ahead and click let's get started. And so it asks you a couple of questions here.

The first one is inline registration. So it's do you want to prompt your users to set up two Factor Authentication after login? So when you enable this, the users will be prompted to set up the 2fa method. After entering username and password, users can select from the list of all two FA methods.

Once selected, user will set up and will log into the site. So that's what this screen addresses. So you have two choices.

The user should set up their 2fa after their first login or they will set it up in a 2fa plugin dashboard. I'm going to select the first option and choose Continue Setup. This one gives you the ability to enable two factor for all users.

Only for specific roles we are going to select all users or I'm going to select all users here and continue setup and then I can give my users a grace period to set up two fa or they can have to set it up immediately. So I'm going to say I'm going to give them a grace period and then it asks me the grace period and I'm going to Set the grace period to three and I'm going to make sure I select days and not hours. And at the bottom I'm going to select all done.

Now you have the choice to configure two FA for yourself or close the wizard and configure it later. I'm going to choose to configure it for myself. If you're planning to use multiple authentication methods, you would have to configure them one at a time.

So on this screen I'm going to go ahead and select security questions and then I'm going to choose Save and continue at the bottom. And it allows me to configure my security questions. You have three of them that you need to choose.

Two of them you have embedded questions that you can pick from. So for my first question I'm going to just go with my childhood nickname and when I enter my answer, you won't be able to see it because it's already set for privacy here, but I can look at it to make sure I typed it in correctly. And I'm going to go ahead and select my second question and you can select whatever questions you want.

I'm going to go with the name of my favorite childhood friend and input my answer. And then you get to enter a custom question. So I'm going to just put in what instrument do you play? And again, I'll type in my answer here and I'm ready to save and continue.

It lets me know that I've successfully configured the two Factor authentication, at least the method that I chose Questions. And I can get to Advanced Settings from here and from Advanced Settings you can choose other methods to configure from this screen. Now, some of these methods, you actually have to have their premium version of this plugin in order to use, others you don't.

I know that you can use the Google Authenticator, but you have to have a Mini Orange account to do so. So I'm going to point you to where you can go and set up your Mini Orange account, if you don't already have one at the top of your screen, back in the WordPress interface. By the way, at the top of your screen you'll see my account and you can click on that to set up a Mini Orange account for free.

If you already have an account, you can click on that button and it will prompt you to log in. If you don't, you just need to choose a password and confirm it on this screen and then click Create Account. So I'm not going to show you my account page because it just has too much confidential information on it.

So I just came out of my account and I'm back on where you can select other authentication methods. The other thing I want to say about this is, and if you want to, you can go ahead and it will walk you through with the wizard how to configure them. Again, some of them you'll need a premium Mini Orange account to configure or to access.

When you are ready to test these, I would strongly suggest that you open up a new In Private tab or a new window and get back into your WordPress. Now I'm going to show you where you would go in WordPress to get back to this. So in WordPress you would go on your left sidebar to Mini Orange two factor and then it's on the two factor page where you can configure these other authentication methods or test the one that you have.

The next plugin that we're going to use is going to automatically log out idle users. So you know if a user wanders away and doesn't lock their computer and anybody else can wander up and if they're logged in, especially admins, it could really give people access to things they shouldn't have access to. And so you can protect your sessions, your user sessions from shoulder surfers and snoopers by using the Inactive Logout plugin.

So we're going to go back to our plugins and add new and my plan is to test to finish setting up and testing my plugins when we get to the end of this module. Again, some of mine say they're not compatible with my version of WordPress. I have the last version.

So I definitely want to test my plugins at the end of all of this. So on the add new screen for this one we're going to search Inactive logout. And so this one was last updated three days ago.

It is compatible with my version of WordPress. That's nice. Has 10,000 plus active installations.

And so I'm going to go ahead and install it now. You know this process and then activate and from my Installed Plugins page I'm going to go to the settings for Inactive logout. Once you have Inactive Logout activated, you can find it under Settings on your left sidebar.

And you could also go back to your Plugins Installed Plugins page and get to Settings from there as well for this. So your idle timeout you have on the General Settings tab here it sets to 15 minutes. If you're using multi roles then the idle Timeout will be selected for each individual user role.

It's limited to 24 hours, so 1,440 minutes. Your idle message content, you're being timed out due to inactivity. Please choose to stay signed in or to log off.

Otherwise you will be logged off immediately. So that'll be the first thing that's going to pop up on somebody's screen. And then if they don't do anything, they'll get a secondary pop up that says you've been logged out because of inactivity.

So it has a timeout countdown period of 10 seconds. So the first message will pop up after 15 minutes, right? And then they have 10 seconds to do something and then it will log them out. If they do nothing and show the second message, you can disable the timeout countdown.

So when the timeout popup appears, the user is not logged out instantly. It allows the user the chance to continue or a logout will occur within 10 seconds. If you check disable timeout countdown, it will immediately log out the user after the idle timeout minute.

You can have it show a warning message only. You can also have it prevent multiple logins so the the same user won't be able to log in from different workstations. You can enable or redirect.

So if you don't do that, the user will be logged out to the login screen after timeout. And then you can also enable a debugger there. And then you have some modal or pop up settings at the bottom where you have examples that you can look at.

So like for example, the header text, you can look at an example of that the after logout button text, it will say okay, you can see an example of that button, so on and so forth. You can also hide this close without reloading button that can show up as well. So if you want to take a moment and look at some of those examples, feel free.

So this is the example of that header text, which is session timeout that would show up on a user screen. The next setting is role based settings. So I'm just going to that tab and if I enable multirole timeout, it will enable multi user role timeout functionality based on the user role.

So when I click in that enable multi user feature, I can select specific user roles, administrator, editor, author, contributor, so on and so forth. And then you'll be able to define different timeout constraints for those roles. Roles.

I'm going to get rid of editor, which I selected and I'm going to uncheck that box. We'll be discussing user roles and capabilities in more detail a little bit later. In this module, the next tab you have is support.

So if you need more features, it's pitching its Pro version as usual, right? You can rate it, you can support it, you can reach out to the developer about it, and then if you want to upgrade to the Pro version, you have that GoPro tab there that takes you to its website and you actually can try a free version, which is what we have. This one doesn't seem to have a free trial for Pro. So before we continue on my slide of security plugins, I've listed this one WPS high login plugin and I want to talk about what situation would cause you to want to consider using this plugin and more information about it.

So we are actually not going to use this plugin. There is a more secure method for doing a similar thing. So this one you know, by default your WordPress admin login is located within the same subdirectory, the last part of your URL.

So for example yoururl.com login so anyone can type in your website and add the slash login at the end of the URL. If you do have proper security protection, like strong passwords, maybe using recaptcha, limited attempts before lockout and more, you can rest easy.

That brute force won't get through. A good hacker, however, could be able to obtain the correct login through different means. But if you were to Hide Admin in WordPress, it may not do them any good, or at the very least it will stall them.

This particular plugin can prevent some amateur hackers, however, not too many professional hackers. And also it may not work well with other plugins that are hard coded to the WP login PHP file. Either the other plugins will not work correctly or they will interfere with this one.

So you have to be careful and do a lot of testing if you choose to use this. So what will it do for you? So example, you have yoursite.com login, that's the default.

You could change it to something like yoursite.com gdn log, something like that, or whatever you need it to be. So it's not login.

But again, that's only going to stop most amateur hackers, not too many of the professional ones. So we're not going to actually use this login. I just want you to know about it because it comes up as a very popular one, but I wanted you to know its limitations and I have that link at the bottom where you can get more information about it.

One of the things you can do for extra layer of security, and we talked about this in the PowerPoint presentation, is changing the WP database prefix. Now, by default, your database prefix starts with WP underscore, and that's if your hosting provider doesn't change it automatically like mine does. So my bluehost already changed my prefix for me and filtered it through.

It's not just a database prefix, but you have to change all table names as well. So I'm going to show you how to check to see if it's been changed on your system. So I'm back in my file manager for bluehost, and I'm in my public HTML folder and the file that I'm going to edit now, I'm not going to take a copy of it right now.

I'm just going to right click on it and I want to edit the WP config PHP file. So go ahead and bring that file up by editing it. So when you edit that file, you're looking for a line that starts with dollar sign table underscore prefix equals.

Now I have mine blocked out because my hosting provider changed it for me automatically. So my table prefix has already been changed. I don't have to go through the steps that I'm going to show you.

If your table prefix says WP underscore, then you're going to need to go through this process if you want to do this. And so it gives you again more security because every WordPress site has WP underscore for the database name and the database prefix, as well as all of the tables that are on your site. So they all start with WP underscore, which kind of every hacker knows.

So if you can change it to something else, that will prevent them from being able to hack your site. And so the first thing you would have to do is copy this file, you know, put it somewhere else so you have a backup and then change your prefix to something like it could be WPT_976 543_. You can only change it to letters, numbers and underscores.

Once you make that change here, you still have to go and change it for all the table names. And there's an easy way to do that using a SQL script. So what I'm going to do is I'm going to just cancel out of here.

I'm not making any changes. Again, my hosting provider already changed it for me when I set up my site through them. And just a reminder, if you are going to change that file, copy it first, put it in a different directory and then come back here and change that table prefix to whatever you need it to be in the one that is in your public HTML folder.

And you would want to save your changes after that. Now if you do that, then you need to also go and change all table names. So what I'm going to do here is go back to my cPanel for my hosting provider.

So when I get there this time under Advanced, instead of going to File Manager, I'm going to go to phpmyadmin. And so in phpmyadmin I'm not going to do it on my screen because I don't want anyone to see what my provider changed my prefix to. So you can expand this and you'll see all of the databases, all of the tables that would need to be changed.

And instead of having their prefixes changed one by one, you can go to the SQL tab up top and in that link that's on the PowerPoint it gives you sample SQL code that you can use to change all of your table names at once. So I've opened this link and it actually has a whole video tutorial in there, right? It's telling you how to change the table prefix in that WP config PHP file. And it's using an example of changing it to WPA12346 underscore.

And now it's showing you how to go to phpmyadmin to change all the database table table names. And so that SQL query is right here. Now when you look at your list of tables, by expanding in there, you'll see tables that are related to some of the plugins that we've used and the core tables which are like here.

So you would want to make sure you grab those core tables at least and rename them to whatever. You're changing that prefix too. So that's kind of how that works.

So there's a whole article step by step in a video out here that will walk you through that step. Jetpack is a plugin that comes with the WordPress core and I activated it in the beginner course. So I'm back in my installed plugins page.

And if you need to activate Jetpack, you can do it from that page. Let's talk about what it is. So in the middle of that screen.

So here's your jetpack and where you could activate it. If necessary, you can get to its settings. But over here in the middle section I can go to view details.

So let's first learn what Jetpack does. So it is one of the most popular WordPress plugins for just about everything it says it handles security, performance, marketing, it has design tools, it makes WordPress sites safer and faster and helps you grow your traffic. So it has 24.7

automatic site security. It uses real time backups, easy restores, so we used Updraft plus for our backup. It has malware scans, spam protection, it has brute force protection and downtime uptime monitoring, all for free.

So you can back up your site automatically in real time and restore it at any point with one click. Cloud storage starts at 10 gigabytes, which is more than enough for most sites and you have additional storage options available. You can manage migration to a new host, migrate theme files and plugins to a new database, easily duplicate websites, create full database backups, clone websites, so on and so forth.

It also includes an activity log. Now we just installed another plugin for that, but this one includes an activity log. It automatically performs malware scans and security scans for other code threats.

It blocks spam comments and form responses with the anti spam features Powered by Akismet has brute force attack protection to protect your WordPress login page from attacks. It monitors your site uptime, downtime and you can get an instant alert of any change by email. It also has an optional two factor authentication for login and it automatically updates individual plugins for easy site maintenance and management.

Now my host takes care of that for me, but if your host doesn't it would be good for that for you. So it gives you peak speed and performance, powerful tools for growth, easy design tools, integrations, expert support. Right? So that's everything you need to know about Jetpack right there.

I'm going to close that detail screen and on the left navigation Jetpack is toward the top. If I hover over it I can get to its dashboard, which I will go to first. So Jetpack Stats has been activated.

It just needs to collect some data and they'll display your stats there. So I click on OK and I have no activity for this period. You'll see my views today, all time comments, so on and so forth.

I can also view detailed stats at very little because my site is still on a coming soon status. So it gives me seven day highlights. It's giving me by days, I can look at it by weeks, by months, all of that kind of stuff and you see what's included in here, right? And a lot of stuff at the bottom about upgrading to their premium version.

So that's looking at the stats. I'm going back to my dashboard over here on the left. And then as I scroll down I'll see security, right? Comprehensive site security.

It's telling me to manage my security settings here. I can get there. So if I want to go in and manage my security settings, I would click that link.

See where it took me now? So there's my anti spam setting, my downtime monitoring is there. So I'm going to turn this on to get alerts if my site goes offline and they'll let me know when it's back up too. And then I have my anti spam through a kismet and that's already protected my firewall.

So this one, I can protect my site with their web application firewall. I can enable that, right? And then I have two other choices there that it's letting me get to. If I want to upgrade to enable automatic rules, I can from down there.

So you notice how this is blocked out here. I can't do it unless I upgrade. And then there's brute force protection.

I'm going to enable that. It will prevent bots and hackers from attempting to log in with common username and password combinations. So I have allowing users to log into this site using WordPress.com

accounts to get in. So those are those settings that I'm looking at right back over here, that was my security settings. Here's performance settings, writing settings, sharing settings, discussion and traffic.

So you have all of those. We looked at the stats already. If I go over on the left again, I can get to that Akismet anti spam.

So it's just letting me know what my settings are for that. So it's really pretty thorough, I think. On the left side I've gone to Boost.

So that's another plugin, the Jetpack Boost. You can get a free version. It popped up on my screen, so I have the free version.

It shows you what's included in there. So that's why I have Boost there. I have search for Jetpack as well.

And that is I can start searching for free if I wanted to add that on. And then my Jetpack is the last one over there on the left. And this is where you can go to manage your Jetpack products.

So all in one screen. So Jetpack in my case has been running in the background and it's often true. You know this one, you can do backups.

I prefer my Updraft plus, it's a Matter of personal preference for that one. But you have the ability to do the same thing from multiple plugins. So I mentioned this earlier, I just want to drill this point home a little bit better.

One of the most important things when you're selecting a plugin to use is that you're looking at the details about it. You want plugins that have been updated recently that haven't just been hanging out for several years with no updates. You want plugins that have good reviews.

So if I go to my installed plugin page which I'm on, I can, for example Akismet Antispam, it comes in under Jetpack, I can view its details here from that screen. It tells you about the plugin right major features, but on the right side it gives you the version the last time it was updated, the required WordPress version, what it's compatible up to. You get your average rating and you get to see some, you know, how many stars per review type of stuff.

And so that's important. Like I said, if it's in WordPress it's probably safe, but you still want to check this. Some third party ones have gotten through without consent.

So you do want to make sure that they're being updated, that they are, you know, being monitored closely before you use them. And I'm going to just close this now. We're talking about security for plugins here, but there is also security that we'll talk about for themes when we get to the next module.

So I'm back in my site and we're going to go back to plugins add new now and this one is the WP Activity Log plugin. So I'm going to search for it. So it comes up and I have 200,000 plus active installations.

It was last updated two months ago. Again, it hasn't been tested with my version of WordPress. I'm going to go ahead and install it.

So this forces user accountability as well. We talked about that earlier. So I'm going to install and I'm then going to activate.

So it asks me if I want to run the wizard to configure the basic plugin settings and I'm going to select yes, I'm going to just walk through the screen. So start configuring the plugin. So the level of detail you get to select for your activity logs, basic would be I want a high level overview and I'm not interested in the details.

It defaults to Geek, which means I want to know everything that is happening on my WordPress and you can Change this setting from its settings at any time. I'm going to leave it on Geek and choose Next. Do you or your users use other pages to log into WordPress other than a default login page? So I'm going to leave it on no, we only use the default WordPress login page and again these settings can be changed later.

I'm going to do next. Can visitors register as a user on your website? So I'm going to leave mine set to no and next how long do you want to keep the data in your activity log? You can keep it for 6 months, 12 months, or all data. I'm going to leave it on six months.

So at the bottom it has some information down there. The plugin stores the data in the WordPress database in a very efficient way though the more data you keep, the more hard disk space it will consume. If you need to retain a lot of data, we would recommend you to upgrade to their premium version of this plugin and use the database tools to store the WordPress activity log in an external database.

So I'm going to just do next on that. It can also monitor changes done in other plugins. So extension for WPForms, which I'm not using, there's an extension for Yoast SEO which I am using.

So that would keep track of all the changes that you do in Yoast SEO Metabox plugin settings and much more. So you have the opportunity to get those connected in here as well. I'm going to just do next.

If I wanted either of those, I could install the extension. I'm going to just do next and so it's letting you know that it is installed, it's all set up and ready to use. You can finish it gives you some useful links there.

And I'm going to go ahead and click Finish. So on the left side, on that left navigation you'll see toward the top the WP Activity log and you can get to your log viewer. If you have email notifications, you can create reports, see which users are logged in, go back to your settings, so on and so forth.

So you can access it from the left sidebar. And you can also of course upgrade to their Premium or Pro version. So just to show you an example of the WP Activity log viewer, I've gone and made some changes on my site.

1 I created a custom field and the others I deactivated, activated and installed plugins. The ones that we used I went and uninstalled and deleted and then reinstalled and activated a few Just so I'd get some entries in this activity log. So all of the users are the same.

It's me, I'm the administrator. So I would be able to see all of the users activity in this log viewer. And it's basically letting me know the date, the time the user.

I've blocked out my IP address. In the first instance on this screen it's the object is a user. That's where I created the custom field.

The second and third ones are plugins that I either activated or installed. So in this case I installed and then activated the inactive logout plugin again. Now you also get these warnings here.

The green one is low in terms of severity, the orange one, the orange open circle with the exclamation point is high and the exclamation point with the filled in circle would be critical. So just I can organize these by their level of severity as well. And for each log entry on the right there's an ellipsis where you can view all the details of this change.

I'm not going to bring up that screen. It just has too much of confidential information on it for me to share it in the video. So I just wanted you to see an example of that activity log.

So for the next plugin and this would be the last one that we're going to be looking at in this lockdown login page section. It's actually could be in a broader section than that and that One is called Jetpack. Jetpack comes with WordPress Core and so you should already have it under your installed plugins and you may need to just activate it.

So I'm going to have you go through the activation and then come back here to go through the settings on your own. But I'd like to show you my Jetpack what I have going from Jetpack right now. Now there are things you would have to upgrade to to get access to, but I'll show you what I have and all of what I have so far for my Jetpack is free.

So on the left side, on my left sidebar, I'm going to hover over Jetpack, right? And I see all of these things. So I'm going to go to the bottom and choose my Jetpack first. So from here I'm seeing the Jetpack products and some of these have a cost involved with them, some of these are free.

So for example, if I go to add Vault Press Backup, it lets me know that it's a dollar trial for the first month and then $10 a month billed yearly. There's also another popular upgrade here for security, right, which includes the Vault Press backup scan and a Kismet anti spam. And that's 20amonth, paid yearly.

I can go back to my Jetpack from there. And so I have a Manage button in Active next to my Akismet anti spam. And when I click on Manage it lets me know that it's active and ready.

Now this works on comments and forms, so it gives you some settings here that you can, you know, choose to select and it gives you down at the bottom your subscription type. This is a free account for Akismet and it also has an upgrade. And I'm just going to end by showing you my Jetpack stats from its dashboard.

So again, my site hasn't been published, so I have no activity this period, no views, all of that kind of stuff. I can view detailed stats from here. It has a security section where I can upgrade, which I told you there was that upgradeable security option.

I have my Vault press backup, which I can upgrade. My scanning, which I can upgrade. It shows the Akismet stuff, the anti spam from comments and forms, brute force protection.

It's letting me know that it has protected me from 61 malicious attacks and I haven't received any emails that my site is down at all. But if it were, I would. As I scroll down, there's the performance and growth section.

It's letting me know that my image accelerator is enabled. I can upgrade. Now the search feature is.

It has a cost involved. Video press allows you to have one free video and then you would have to upgrade Boost. That plugin is installed and Active and CRM is as well.

All of these are different things that I can get via Jetpack. And then at the bottom it has your connections and then you can access some help from there. So go ahead and activate or install and activate Jetpack and go to your my Jetpack and pick the features that you want.

So I have a slide here for you showing the user roles, also known as capabilities that are available in WordPress. Now you may or may not have SEO Editor and SEO Manager and that if you have enabled Yoast for your SEO settings, those two roles will show for users. Then you have subscribers, which is the least amount of permissions all the way up to administrator, which can do everything on your site.

So when you're setting up your users, you want to make sure that you're assigning them the appropriate role that they need for access to what they need to do on the site. The default user's interface in WordPress can be limiting depending on what you need. And so right now I'm on the all users page in WordPress and you could see my username, I blocked the email, my role, the fact that I have two posts, my two FA method is security questions, and the icon over on the right shows that this user is linked to Jetpack, that overall security plugin that we added.

And so I have all of that set up here. Now I'm the only user at this point. If I hover over my username, I can edit or view my user profile, which I haven't completed at this point.

So what we're going to do next is we're going to go down under Users on the left sidebar and we're going to select Profile. So you'll see some personal options here and you'll see that you can change the admin color scheme. I'm going to go ahead and change my color scheme here to Sunrise, just to make it a little bit more interesting.

You can see the change as soon as you select it. So when I select Light, it looks like that. If I go to Ectoplasm, it looks like that.

I'll leave it on Sunrise for now. I might come back and put it on default. If you want to be able to use keyboard shortcuts, you can enable that there and then you have a link where you can figure out what the keyboard shortcuts are to navigate.

In WordPress. The toolbar shows by default when you're viewing the site, the language is the site default. And then you have this particular user's name and you can fill in additional information here.

So I'm going to go ahead and put in my first and last name and by default it assigns you a nickname which is the same as your username and that can be changed. So I'm going to change my nickname to Garden Nana. And then I have the choice to display my name publicly as my username.

And you'll see in the upper right hand corner it's showing that howdy to me at my username. Or I can choose my real name or my nickname from the dropdown list and it gives me variations. I can use my first, my last, my full name, last name and then first name, or my nickname.

I'm going to choose my nickname. Underneath that you have a contact info section where you can put in your website information. Facebook, Instagram, LinkedIn, MySpace, Pinterest, so on and so forth, profile URLs.

And then you have an about yourself section where you can fill in a little bit of biographical information for your profile. I'm getting my profile picture from my Gravatar account, which will follow me around the Internet. And then I can set a new password.

If I were logged in in multiple locations, I could log out everywhere else from here. And then lower down, it gives you some application password information as well as some Yoast SEO settings and then another screen where you set your two factor authentication. So we chose the security questions and we had entered them when we set it up.

For some reason it doesn't carry over here, so we'll have to enter them again here. And this is the same place that your users will come to in their profile to set up their two factor options. And again, you can configure other options from here as well.

And then if you make changes here at the bottom, of course on the left, you're going to go ahead and click Update Profile. One of the things I like the most about working in WordPress is, let's say I was at the bottom of my profile page and I got a phone call, got tied up in that, switched to other screens on different tabs and I come back, it scrolls me to the top of the page and it let me know that I already updated my profile in case I forgot what I was doing before that phone call came in. And of course I can close that message on the left side.

I'm going to have you go to Add New under Users now. And so you'll notice that this is the Add New User screen. Now, I'm not going to fill it out right this second.

I just wanted to point out something in here first. So I'm going to scroll down and notice that you can only assign one role to a user. It's a dropdown.

Now, this is going to look a little bit different than some of the user roles that you saw on the slide. So I'm going to do the dropdown. And because I enabled Jetpack CRM, I have a bunch of roles for Jetpack CRM.

I'm also using Yoast for SEO. So my SEO Editor and SEO Manager roles there. And then you have five, what I would say are default roles which you saw on the slide.

Subscriber, contributor, author, editor and administrator. Now, what if we wanted to give a user or some users multiple roles? We would need to use a user plugin for. For that there are two user management plugins that we're going to use.

Members will let you easily create and manage user roles and permissions in WordPress and more and it also allows you to assign multiple roles to users and then user switching will let you quickly switch to different user accounts. So I'm the admin and maybe for every user that I'm adding, I want default language in their profile so I could go switch to those users, add that language, and then the user can add on to it when they're into their account. So we're going to examine both of these plugins in detail.

So when we were on that add new user, you saw that it gave it a role of subscriber. Now I'm on General Settings on the left sidebar and you'll see that this is where you can come to set your new user default role. In my case, I'm going to just do the dropdown here and I'm going to select Author.

I'm going to say in my example, most of the users I'm going to be adding are going to be authors. So and I can always change it when I go to add that new user, it's just a default. So I scroll to the bottom and I'm going to save those changes.

And now I'm ready to search for the members plugin and I'm going to choose Install now and then as usual, activate. And once I do that, it'd be showing on the left side where we have our yoast SEO, our limit login attempts, our mini Orange two factor Security, security, there's members and when I hover over it, I'm going to select roles. So you're seeing a listing of all the roles.

The one at the top will be your role. In my case I'm administrator. And then the default role will show next.

Now if I scroll down through this list, I'll see all my jetpack roles, my SEO roles, as well as the other default roles. Now for my role, I can edit it, I can clone it. If I click on users there, it would just take me back to the WordPress default users screen.

So this is just showing the roles here. Now one of the things that you could do here is you could change the capabilities of a role, the things that users can do that have that role. And so if you look Here, I have one user who is an administrator.

The administrator is granted 76 capabilities and denied zero. So the administrator, as you know, can do everything on the site. The author, by the way, is only granted seven capabilities.

So it's showing you the number of capabilities granted for each role here. If I want to change that. So let's do this, let's go to the contributor role and choose edit underneath it.

So here you can see all of the capabilities. These are the general capabilities under that a contributor can only read if on the left I go to the post capabilities. You see that a contributor can edit posts just their own delete posts just their own read post.

And that's it for post, right. Let's say that I have a few people who I want to assign the contributor role and I want them to be able to publish their post. So I'm going to go ahead and if that were the case, I would grant them the ability to publish posts here.

So if I truly wanted to do that, I could. What I would prefer to do is just create a new role with those capabilities. And so I'm not going to grant them the ability to publish posts here.

But I just wanted you to see that for every role it has its capabilities, general posts, pages, media, so on and so forth. So I recommend, like I said, adding a new role instead of editing an existing role. And you can do that two ways.

So I'm going to go to add new role on the left under members and it gives me the ability to enter the role name. Now we're not going to use this method and I'm going to tell you why. When you choose add new role, it only gives read capabilities for general post pages.

I think. Yeah, that's it. I think that's the only capabilities it gives when you add new role by default.

So you would have to remember the capabilities from the contributor's role to be able to grant them in this new role as well as any additional capabilities you want to have. So what I do instead is this. I'm going to go back down under members and I'm going to go back to roles and I'm going to hover over contributor and this time I'm going to select clone.

So it gives me a contributor clone. If I go to post, you'll see that what it granted for the contributor. So it carries over everything that it already granted to the contributor.

And you can make the changes in here. Now I wouldn't keep the name contributor clone. I'm going to get rid of clone and at the beginning of it I'm going to type the word valued.

So it'd be a valued contributor role. Their general capability will stay the same for their post. I'm going to allow them to publish and that's the only extra capability that I'm going to give to this role.

And that's kind of how that works. So over on the right you'll see that no users have been assigned to the role. It's granted four capabilities total.

And I'm going to click that Add Role button. So when I go back to my Roles page, I'll see my valued contributor role there as well. So now let's explore some more of this Members plugin.

And so on the left we're going to go to Settings now under members and so you have general settings and then you have add ons. We're going to go through these general settings first. So under Roles and Capabilities it lets you know that your roles and capabilities will not revert back to their previous settings after you deactivate or uninstall this plugin.

So use this feature wisely. So this plugin is really an interface between your WordPress database and so you're actually impacting that, which is why it won't revert back if you were to uninstall or deactivate the plugin. So the role manager, if you have that enabled, that allows you to edit and add new roles, or add and remove default and custom capabilities.

So we were able to do that because this is enabled, and then multiple user roles. If yours is not enabled, go ahead and check it because we want to allow some users to be assigned more than one single role and in capabilities. If you've denied any capabilities to any roles that you're going to use, it's saying they should always overrule granted capabilities.

If not, your user will be denied access to whatever that capability is. And then content permissions will bring up an additional box on the post editing screen. So for any public post Type, Pages, Posts, etc.

You'll see the content permissions metabox and it allows you to select which roles can view the content of the post or page. If no roles are selected, anyone can view the content. So it only will block post content, post excerpts and post comments, nothing else.

So that's what that content permissions tie to. So if someone didn't have permission to view a certain page or post, they would get a message that says, sorry, but you do not have permission to view this content. There are a few other settings underneath that we don't need to cover.

And then if you go back to the top, you can click on the add ons tab and all of the add ons from members are free. So you have a plethora that you can use here. So for example, you have members admin access allow site administrators to control which users have Access to the WordPress admin via role and so it may be a situation where you're getting a consultant to build out part of your website and you want to give them admin access in addition to yourself, something like that.

So you can take your time and look through these different add ons that you have here. If you wanted to create a hierarchical role system, you can add that. Members role hierarchy, add on.

And so they run the gamut, right? Have all kinds. There's a WooCommerce integration and we'll be using the Woocommerce plugin later in this course. So you now know that members has an integration plugin for that.

There's payments, subscriptions, email marketing, advanced content protection that you can get via add ons. So now we're going to add a new user and again our members plugin is enabled. So it'll be a little bit different than we first looked at the Add New User screen.

So the first thing I want to point out on the Add New User screen, which is different, is that now you can select multiple user roles. It's no longer a dropdown, it's checkboxes. And that's because of the member add in.

So what we're going to do is I'm going to go ahead and put in my username here and I'm just going to set up a training user. I'm going to put in the email and then block it from your site and then I'm going to go ahead and fill out the first and last name. Not going to put in a website, I like to let it generate a password.

That is the best way to get like the strongest passwords in here. And if I wanted to generate a different one, I can just click that generate button again and then the user will get an email about their account and that email will be how they can log in. So for this user, I want to give them author and editor permissions.

Sometimes like right now, the admin, you know, is the only person that can approve people's posts and stuff like that. Sometimes when it's really busy, I would like to have certain people have the capabilities of the editor role as well. And then once I have all of that filled out in the bottom left, I'm going to simply click on Add New user.

So it brings me back to the all users screen. And I'm seeing myself as administrator and my training user who also has a Gravatar account. That's why that picture is there, has the author and editor roles assigned to them.

It's also saying they have zero posts and they're not registered for 2fa and because I just added them, they're not linked to Jetpack either. And so this training user would have received an email that would allow them to log in and then they would be coached how to go and get their two FA set up, how to fill out their profile, so on and so forth. I'm back on the Add New Plugin page and the last plugin we're going to add in this module is User Switching gives you or any administrator the ability to switch between user accounts.

So I'm going to go ahead and type in User Switching and I'm going to install and then activate it. And this particular plugin does not show on your left sidebar. Where it shows is on your users page, your all Users page.

So again, only admins can switch users if you're running a single site installation. Or you would have to be a super admin on multisite installations in order to be able to switch users. So the way I do it is I hover over training user and you'll notice that now I can edit that user, I can delete that user, I can view that user's profile, I can send a password reset to that user and I can switch to them now because of the user switching plugin.

So I'm going to select Switch to. So it brings me into the Dashboard page and at the top of that page I can see that I could switch back to Garden Nana because I put in Garden Nana as my nickname and chose to have that display up here. Training User is displaying in the upper right.

So I know that I am in that user's WordPress. And so what I could do from here is go to that user's profile if I needed to. So in this user's profile I put just one line in their biographical information in the about yourself section.

And that's all I'm going to do in here. So I'm going to go to the bottom and save the changes. And when it brings me back to the top of the profile page where it lets me know it updated it, I can switch back to the admin account from here as well.

And that's what I'm going to do. And before I recap this module, I just want you to see the result of the inactive logout plugin that we used. So I let my session expire in the background you'll see the session timeout dialog where I would have had the choice to say okay or close without reloading.

And since I wasn't on the screen. When that happened, it went ahead and expired my session and I would have to log in again. So this is because of that plugin, A way to lock down your login screen by way of review of our first module securing your WordPress website.

We started by going over the principles of WordPress security and discussing them. You then learned the best practices for WordPress security, and then we reviewed the security plugins that we were going to use. Then we talked about how to disable directory browsing and I showed you that mine has been disabled by my host.

And you learned how you can type in your site address and then wp include slash @ the end of it to check to see whether directory browsing has been disabled on your site. I gave you a little bit of a tour of my site and before we started doing anything, we backed up our site by using Updraft Plus. Then we installed the Sucuri plugin which monitors and audits your site, but it allowed us to disable file editing, so we won't have that theme editor or a plugin editor that could be breached.

We also learned how to disable PHP file execution, which requires a change to a database file unless you do it through Sucuri. So we use Sucuri's hardening screen to disable both file editing and PHP file execution. We learned how to modify our screen options in WordPress to control what kind of pop ups show up on our screens.

And then we learned how to use certain plugins to lock down our login page. So we learned how to limit login attempts. We added a two factor authentication plugin and we set up security questions for it.

We installed and enabled a plugin that will automatically log users out after they're inactive for a particular period. You learned a little bit about how to hide your login. So instead of having you know everything ends with the slash login at the end of the URL for a WordPress site.

Now some hosting providers will change this automatically for you, as is my instance using bluehost. But I gave you some guidance on how you would have to do it if your provider is not doing it for you, and that just again protects your login screen. You also learned how to change your WordPress database prefix if necessary.

Mine was already changed by my hosting provider and you have the steps on how to do that. And we also used an activity log, a WP activity log so that we can look at the actions of all of our users on our site. And then I had you go ahead and activate Jetpack for Further security on your site we then went on to talking about and I kind of mixed these lessons up, but it made sense to do it this way.

You learned about their user roles and abilities or capabilities, if you will, in WordPress. And then we went about setting up secure user accounts. Now we learned how to manage our users by using a couple of user management plugins.

We used the members plugin so that we could assign multiple roles to our user, which the default WordPress users interface doesn't allow us to do. And we also used user switching so that an admin, or for a multi site, a super admin, would be able to switch between different users. We created a new user.

You saw how the password, a real secure password, was generated and because we already had the members plugin installed, we gave that user multiple roles. And then you saw how the admin could switch to that user's account and then switch back to their admin account very easily. Your brain will be given a break in module 2 compared to module 1 as you'll be learning how to choose and install themes.

So I'm going to shake this up a little bit too. I'm going to go over the factors to consider when choosing a theme and then we'll go about finding and installing and changing themes in this module. As themes control the overall appearance of your site and layout of your site, you would want to consider these factors when you're choosing a theme.

So you need to know the themes, available features based on your site's purpose. So right now I'm working on a blog site and that's, you know, something that I would need to look at when I'm choosing a theme as opposed to like an E commerce site, which we'll get to later in this course. You also want to consider the simplicity of a theme and obviously its price depending on your budget.

You want to look at the functionality of it, how it can be customized to represent your brand's aesthetic, its responsiveness. So how does it interpret on a mobile device? Cross browser compatibility would be very important as well as plugin support. Some themes don't support some plugins and vice versa.

So you have to kind of look at all of those factors when you're choosing a theme. So now I'm sitting in Themes, which is under Appearance in your left sidebar and you can see that I have a theme called 2021 as my active theme. And because it's my active theme, when I hover over it I can see theme details and I'm going to select that.

So What I'm looking at down here, because it's active on the right side, it tells me about the theme. And at the bottom it has tags. So those are kind of like them, features that are part of the theme.

And you see some of the features that are important to me are in the tag. So it's accessibility ready. For example, it lets me do custom menus, it has featured images, it allows for footer widgets, it also supports sticky post and it's translation ready.

So if those are a handful of the features that I'm interested in, this is a good theme for me and that is why it is currently my active theme. So now if I go and view my About Me page, my front page, you can see that this is known as the primary menu that lets me navigate the site. And because I can customize menus with this theme, when I go to the bottom, you'll see that I've customized a secondary menu which shows the categories that I'm using on my blog as well as the uncategorized category.

You'll also see that it has a search wizard in the footer area on this theme as well. And at the top it allows for a featured image. Now, if I go up to the primary menu and I go to my blog page, this is my sticky post, which is supported with this as well.

So this will stay in the top position on my blog page until the point where I make another post sticky and then that will remain at the top of my blog page and I can use the clock symbol in the upper left where it has the name of my blog, to get back to themes. So the other themes that are available on this page are themes that come with the WordPress core. So out of the box.

I think I've added the Vivid Blog theme here previously, but Sinatra 2023 and 2022 are included with WordPress Core upon installation. So let's say we wanted to add a new theme that's not here. Well, you're going to click on the Add new theme icon and in the upper right corner you have a search themes.

So this is our blog site. So I'm going to just type in the word blog and you'll see that there are a host of blog themes available to you. And so if I.

I'm going to just go up to the top and if I hover over the first one, in my case it's called the Courier Blog, I can click on details and preview and it gives you kind of a preview not with your data. Right. And it Also tells you about the theme on the left side.

And I'm leery of themes that have not been rated yet. So even if I like the look of this, I would probably pass on it as a security measure. Now that's not to say that there is anything wrong with the security of this theme, but you do want to be careful.

Similar to when we looked at plugins earlier, you want to be careful and so looking at their ratings is helpful information. Now, if I wanted to keep it, I could simply install it up here, but I don't. So I'm going to use the X to get back to my search results.

So this is a lot of different themes that are categorized as themes for blogs. And so I want to filter the list to the left of the search box and I can actually clear that search box by using the X. That little gear says feature filter and I'm going to click on that.

So under subject I'm going to select blog and then I can drill down on features and layout if I want to. So the features that are important to me are accessibility ready. I like to be able to do custom colors.

I'm also going to select featured images, footer widgets. I'm going to check post formats, sticky and sticky post. So under features I have accessibility ready custom colors.

I'm going to go ahead and do custom header as well, featured images, footer widgets, post formats and sticky posts. And then under layout I'm going to choose right sidebar and you can select other options if you'd like. So it tells me at the bottom I'm going to apply nine filters.

I'm going to go ahead and click that button. And so now I have a narrower set of blog site theme results. And so the one that I'm going to look at in more detail is called Agama Blue.

So I can hover over it and click on details and preview. So now I can see a mockup preview of this theme. Theme, you'll see it has a primary menu across the top, it has this header image with some coloration behind it and kind of a shape, a wave shape on it.

And it just gives you kind of like placeholder information on this preview. And so on the left it gives you a little snapshot of what it could look like with real data in it. And then it has a five star rating.

However, there's only one rating. Now that would normally be of concern to me. But if I look at the detail here, it says this is a child theme of a gamma.

So typically when you install A child theme, you get the parent theme as well. And the parent theme usually has more ratings. So I'm going to take a chance up top and I'm going to just install this theme.

So after it installed, I close the side panel and I'm back on my themes, my installed themes. And you'll see that I have a gamma which is the parent as well as Agama Blue installed. And so if I hover over to parent and I go to theme details, unless I activate it, I won't see anything about its reviews.

But I happen to know for sure that this one has more reviews and they're almost all five star. So it gives you the tags where you can see what's included in it. Here I'm going to close this one and I am going to go ahead and activate a Gamma Blue.

And so now it lets me know that it is active now if I want to take a look at it right and see if there's anything that I might want to change about it. So the easiest way for me to do that is to go right up at the top of your themes. It says new theme activated.

Visit site. So I can click that link there and see this theme with my stuff. So here it has this upper menu.

This home page is actually called About Me. That's my front page. It has another secondary menu over here.

It also has a search box next to that menu. There's also a search widget on the right sidebar, which is one of the features. It allows for a featured image, which was something else that we wanted.

And if I go to blog up here, I'll see that it has my sticky post at the top of my blog page. And in this theme it labels it Featured Post. Now I'm going to just go back up to the clock icon, the upper left corner and go back to themes.

And by the way, if you activate a theme and then you look at it with your data, you may not like it. So you can just simply come back to themes and reactivate theme that you used before that you knew you liked or look for other themes and check them out. So with this theme, I'm kind of comfortable with it for a while.

I liked my original 2021 theme, but the thing that bugs me the most about this theme is that header picture that's up there. So in the next module we're going to spend time with customizing items, but for right now we're going to customize that header image. And before we do this, on the left side, I'd like you to go to Media, click on Media and these are all of the images that I have in the files for the video description that I uploaded to my media library.

If you haven't done that already, go ahead. And you'll notice if I go on the left, I can click on Add New if you haven't done it already. And then you can just select all of those image files and drop them here to upload them.

Or click on Select Files and navigate through File Explorer to get to them and select and upload them. So once you get those up, we're going to go back to themes. So right there on your Active theme you have a customize button.

Or you could go to Customize under Appearance on your left sidebar to get to it. Both roads lead to the same exact place. So it lets me know that I'm customizing my blog the Active theme here.

If I wanted to change it, I could change it to any of my other installed themes. And then you have all of these different categories. Right now our interest is getting rid of this default picture and the wave shape underneath it and the coloration.

And so the first thing we're going to do on the left is we're going to click on header to expand it and we're going to choose header image and expand that. And so the first thing we're going to do is where the bottom shape says waves, we're going to do the drop down and select none. So we get rid of that wave pattern at the bottom of that mountain image and then you'll see your current header, which is that image.

And so what we're going to do is we're going to tell it to hide that image under current header. Now, I've already uploaded some images because I've had my media library up for a while. So what you're going to do is you're going to click on Add new image and make sure you're on the Media library tab and you want to select the basket of herbs.

So once you select that I already have it, you would do select and crop on the bottom right and then you could just skip the cropping. I'm going to get out of here because I already have that image up there. And then you're going to go back and add another image.

And that's where you're going to grab the basket of strawberries. You can skip the cropping on that as well. You're also going to want to grab the antique watering can as well as the basket of veggies.

So make sure you get those four images added on that Customize panel. Once you have those four images under previously uploaded, you should see those four images. And underneath that you're going to click on the button that says Randomize uploaded headers.

So it will swap out those four pictures occasionally. So it has cycle through those four pictures. Now the only thing we have left to do here is we have to save the changes we just made and we're going to address this coloration.

We want to get rid of that coloration because it's really obscuring the image. So at the top of that customization pane, you're going to go ahead and publish and then you can close that pane and you can go back into customize and we'll do this last change for now and we're going to hover over colors and styling on the left. Expand that and we're going to expand header image and we're going to uncheck enable background overlay.

So now you just see the actual picture without that overlay. Now it looks like I'm going to uncheck this for a moment. Yeah, I'm going to uncheck Enable particles as well because you see when they're enabled has these little particles floating over the image and I don't want those.

So I'm going to uncheck both of those and then publish. Now, the last time we published I had you do the X and then get back into customize. We could have done the back arrow here to get back to all of the different options.

So now I am going to close that panel and again we'll do further customization in the next module and I may even switch themes again. It just depends. So now if I go to Pages and I'm going to view my About Me page again and I can see the image at the top again, it's rotating right between four different images just to show you that change and it doesn't have the color behind it.

I am going to just go back to themes or actually I landed on my dashboard, so I'll just go back to themes from here. So the other thing I'll point out is that on the Themes page, sometimes you'll get a theme that recommends a plugin. So this theme is recommending this Agama Blue theme is recommending a plugin called Elementor and it gives you the ability to begin installing that plugin or dismissing this notice.

Now, if you want to know what Elementor can do, you can click the link there and get information about it. I'm going to go ahead and dismiss this notice and I have another notice up there that I'm going to dismiss. So when I installed this theme, it changed something in my jetpack that it wanted me to go and address.

And that was the second message that I dismissed. And so we now have active the Agama Blue theme or whatever theme you selected. And I'm going to live with it for right now.

So in module two, you learned about choosing and installing themes. We started by reviewing the factors to consider when you're choosing a theme, factors that would be important for you. So some of those factors could be available features based on a website's purpose, simplicity of the theme, the price of the theme, functionality, what can be customized, so on and so forth.

And then you learned how to search for themes and how to then search for themes by using feature filters to narrow the list of results. We researched a theme by looking at some sparse details, realized it was a child theme, and went ahead and installed it. And when we installed it, we got its parent theme as well.

We activated the theme and then we went about customizing it just a little bit to get rid of the default image and have it cycle through four different images from our media library on its header. In this third module, we are going to focus on further customizing your website appearance and design. So in the last module we customize, we did a minor customization of a theme and we're going to expand on that in this module.

Our first lesson will be all about menus. The second lesson will cover widgets. The third lesson is the WordPress customizer, which you've already been exposed to.

And in the final lesson in this module, you'll learn about amp plugins for WordPress, what they are, what it means, why you would need to know about them. So you've seen the menus based on the theme that we selected, and you know that it's a list of links that are typically displayed at the top of your site. But you also see that there can be multiple locations for them on a site depending on your theme.

And you know that they make it easy for your visitors to find their way around your site's pages and content. When you start a new site, a menu is created automatically. And again, your site's theme can control where menus are displayed.

And typically you can have multiple menu locations on your site. Some themes come with a social links menu with icons that link to services like Twitter and Facebook so visitors can find you on social media. If your theme does not have a social links menu, you can still create one by inserting a social icons block, which you'll learn how to do during this module.

So I have on this slide the supported icons for those themes that do include a social links menu. There are some advanced menu options that you will see as we progress through this lesson. And I'm just again reminding you that this slide deck is in the files for the video description.

So I consider this slide for your future reference. We'll go over these advanced options when we get hands on working with menus. So now under appearance I'm going to scroll down and I am going to select menus.

And the first thing I would like to do is toward the top you'll see that it has two tabs. We're on the Edit Menus tab, which we come into by default, and we want to first click on the Manage Locations tab. So this is where it lets us know that our theme that we selected supports three menus.

Select which menu appears in each location. So there's a top menu, a primary menu and a mobile menu, right? So all the way at the top of this menu screen you'll see a button that says Manage with Live Preview. So I'm going to go ahead and click that button.

And what it's done is it took me to the customizing menus. So the WordPress customizer and it's showing me my site. And at the very top is where they have that top menu for this theme.

And then here where you have this lines, that is your primary menu. And then it gives you the mobile menu option which would show on a mobile device. And so for the top menu I'm going to do the drop down and select Primary here.

So it starts with about me, blog and articles. That's how I had my primary menu set up in my previous theme if you need to edit your menu. So the top menu right underneath where it says primary, there's Edit menu.

And so what I'm showing here, right, the menu name is primary and I can reorder these items or add items. So if I click on add items, I already added pages, right, you can select from pages, posts, categories, tags, formats, custom links, stuff like that. So I have those three pages there.

About me My blog page, which is a post page and then my articles page. And so on the left it also has the menu location. So this is the top menu which is currently set to primary.

And what I want to do is since we made this top menu set to primary, I'm going to go ahead and publish that. So I Keep that change. And I can do the back arrow next to customizing menus primary and I can go back to view all my locations again.

And then my primary menu, which would be accessed over on the right side of the page. I'm going to do the drop down there and select secondary menu. And if I want to, I can edit my secondary menu.

And so my secondary menu is my category menu and my categories are in a hierarchy. So vegetables, herbs, fruit, and uncategorized. So I already have that set up.

I'm going to do the back arrow there. And so let me go back and view my locations again. Right.

So the top menu is set to primary, my primary menu is set to secondary, and my mobile menu also set to primary as well. And then at the top I'm going to go ahead and publish. So I'm really kind of glad when things don't go perfectly here.

So when I look at this primary menu, it's not showing my categories, but I'm not going to give up yet. What I'm going to do is I'm going to close this customization pane and I am going to go back to pages and view my about me page. And so now I'm seeing that it is showing that secondary menu, the category and uncategorized there as my primary menu.

And there's my top menu to just navigate the pages of the site. So the moral to this story is occasionally you'll run into a glitch where the live preview doesn't actually update. But before you call it a wrap and say, oh, it doesn't work, go view a page.

I mentioned earlier that not every theme has a social links menu. And an example is the theme that we're using. Right? So this particular theme has that top menu, a primary menu, and a mobile menu.

There's not one that's specifically named social links and it's kind of hit or miss. I used to know a theme that had a social links menu built into the theme, but that theme no longer exists. So you would have to look at every theme's menus to see if it has social links.

If you want to keep this theme and you still want some kind of social icons or social links on your site, you can do it via widgets, which is our next topic. And in the next module, I will show you another way of kind of having those social icons on your site without using a widget or if your theme doesn't have the social links menu available. So we're going to learn how to add social Icons via widgets for our site.

So it might be good to know just what a widget is. It's a modular element that enables you to add a specific feature to your site. Widgets can be added to different areas of a site, such as sidebars or footer areas, and they're an inherent part of WordPress's design and layout customizations.

One of the things I want to point out before we set up our widgets, I'm viewing my About Me page again and you'll notice next to this primary menu where we have the categories is a built in search box. Now we can't modify that primary menu to get rid of that search box. If you look down on your right side, you'll see on that right sidebar for this theme, that's where the widgets are.

So this theme includes a search wizard in that right sidebar. We don't need two searches on a page. So what we're going to do is we're going to get rid of that search widget and we're going to replace it with social icon widgets.

And we're going to do that. I'm going up to my clock and I'm going directly to widgets. And so right here I'm going to click.

It tells you it's that main sidebar which in this theme is on the right side where it says add label. I'm going to click and you'll get that toolbar above it. On that toolbar the last icon is the options ellipsis and we're going to select it.

And at the very bottom we're going to choose Remove search. So that whole search widget has been removed. And then we have a blank block which I'm going to click in.

And when I click in there it says add block. I'm going to do the plus sign to add a block. And if you need to search for social icons or you might be seeing it already on your list, it's already on my list, so I'm going to select it.

So now you'll see where it says click plus sign to add. I'm going to click that plus sign and I'm going to expand this list by choosing Browse all and I can see all of the social icon widgets. The first one we're going to add, we're only going to add two here because in the next module we're going to do some more social media type things and you'll learn other ways of doing this instead of widgets.

And so I'M going to go ahead and click on Facebook and then I'm going to come outside of that widgets box, click to the right of Facebook and I get another plus sign where I can add another icon. I'm going to click that plus sign and this time I'm going to add Twitter. So just Facebook and Twitter for now.

So now we just have to configure these icons. I'm going to click on the Facebook icon and it wants me to enter the address to that Facebook account. So what I'm going to put in, I'm going to use the Learn it Facebook page here.

So that would be HTTPs. I'm going to do the colon, slash, slash, www.facebook.com, another slash.

And then what comes after this would be your site. So I'm saying I'm using Learn It. So it would be learn.it.

anywhere and another forward slash. And so to the right of that you have that circular arrow and you have to click that to apply that to Facebook. And then I'm going to click on the Twitter icon and I'm going to enter the Learn it Twitter information, which is all one word.

And I need to apply that using that circular arrow. So now I'm ready to go ahead and click Update in the upper right hand corner so that it saves that as our widgets. So now when I view my About Me page, I no longer have that search box on the right sidebar.

I have the Facebook and Twitter widgets. And if I click on the Facebook widget, it takes me to the LearnIt Facebook page. So we only added two social icons to our main sidebar as widgets.

And now I'm going to scroll down and you'll see that this theme provides four footer widget areas. I'm going to select Footer Widget 1 and then I'm going to click the plus sign. And this time I'm going to browse all.

And you'll notice it has text and then media. There's categories here, design, and then there's a widget category and you can see the choices that you have in there. And so what I'm going to do is I'm going to use the archives widget in there as the footer one widget.

And so the only archives I have on this new site is from March of 2023. And I'm going to just leave that like it is. And I'm going to go up and click the blue update button so it saves that change.

And then you can navigate to your pages and look at your front page and at the bottom of the page you'll see that first footer widget, which is your archives of your blogs. So our next topic is using the WordPress customizer. And you've been in the customizer before, but we're going to go through it thoroughly this time.

Might do it a little bit out of order because I want to stick on this social icon thing that we've been working on first. So one thing I want to point out on my page is all the way in the upper right there is another Facebook icon. And you'll see in the customizer why that's there and you can change it if you don't want it to be there.

Since we added Facebook and Twitter here to get to our Facebook and or to learn it. Facebook and Twitter pages or account pages, we don't necessarily need Facebook up here as well. So what I'm going to do is I'm going to go to the clock maybe and I'm going to just go back to themes for right now.

And then under themes I'm going to go to customize to get to the WordPress customizer. So we've been in here, we changed the picture for this theme and got rid of the coloration for it. And we have it cycling through four different pictures.

We did that through the customizer before. Starting at the top, I want us to scroll down and in the customizer you'll see social icons and social share so that we don't have a social links menu as we discussed, but we used widgets to add some social icons. So let's first expand social icons and you'll see by default that Facebook icon is there and that's what's causing that icon to show at the very top of your page, not where we added the widget.

So what I'm going to do on that social icon there and I can add more to show at the top of the page. But what I want to do is I want to do the dropdown there and I'm going to just select remove. And if I wanted to add a new one or something, if I wanted to add it back again, I would just select from the list.

So I'll select Facebook and I would have to add in the URL. The default one that was there had a URL that wasn't to the learn it Facebook site. It was to my site and a feed page.

So you would definitely want to set the social icon page URL. You can also tell it to open in a new tab if you're adding it up in that area, I'm going to remove it again so we don't have that Facebook social icon. And then I'm going to go ahead and publish so that it saves that change and use the back arrow to get back to the customizers.

Now, right under social icons is Social share. So the social icons and I expanded social share. The social icons mimic the widgets that we put in.

So it will take you to whatever URL that you put in there. In my case, it was the Learn it Facebook and the Learn it Twitter. With social share, the first thing I'm going to do is enable it and I can say where to make it visible.

And that can be on post Pages or posts and pages, I'm going to just leave it on post. And these share icons are already here. So what these icons do is they have the user share your content on their social media accounts.

So this is not taking them to the learned account. In our example, it will share your post on their social media accounts. So I'm going to go up and publish that or at least give them the opportunity to share it.

And I'm going to go ahead and use the X to close the customizer temporarily. I'm going to go back to my pages and view my About Me page and then I'm going to use my top menu to go to my blog page where my posts are. And so on this page, it's showing excerpts of my post.

But if I click on the Read More link, then it shows me the full post and underneath it it will have a Share this post section. And then the user can click on any of these icons. And I clicked on Facebook, so it would prompt the user to log into Facebook and then they'd be able to share that particular blog post.

So I will say depending on your theme, the customizer options will change. So, for example, we're on the Agama blue theme and I can upgrade to a pro theme and there are a gamma blue options. You already know that the menus don't allow us to have a social links menu, right for this particular theme.

So these changes, these categories on the left can vary depending on the theme that you've selected. So what we're going to do now is have a comprehensive tour of this WordPress customizer. We're going to start by clicking on a gamma blue options, expanding that.

We see there's only one. It's for the blog. I'm going to expand that and then that heading title we've been seeing it when we've been going to the blog page is latest from the blog.

If I wanted to, I could change it here. Now I'm going to leave it at latest from the blog because I'm comfortable with that heading even though I have that sticky post which I want to remain on the top of my blog page. So I'm going to use the back arrow to get back to the main customizer screen.

Your next topic there is site identity. And when I expand that I see my site title and tagline which I can change here. Now it is displaying my site title on my site.

It is not displaying the tagline and that's my preference. And so I can select a site icon if I wanted to. It gives you information about there.

Right? Site icons are what you see in browser tabs, bookmark bars and within the WordPress mobile apps. You can upload one here and it lets you know that they should be square and at least 512 by 512 pixels and you could click on select a site icon if that is what you would want to do. I'm going to go up and go to the back arrow again and I'm going to expand general so we have different sections here.

I'm going to start with pages. So do I want my page titles on or off? Right. I prefer them to be off and feel free to play with these options and then publish them and then go view your pages to see the changes.

I'm just going by what my preferences are now for this particular blog site. I don't have the need to have the page titles on. So if I do turn them on, I'll just turn it on and just sample it for you.

I'm going to go to publish and then I'll go ahead back to my pages and I will view that about me page. And I am not seeing the title here. The page title.

Let me go to the blog page. It might need to take a little bit to refresh, but I don't want it to show anyway. So I'm going to just get back to my customizer and go back to that particular category and change it.

So that was under general pages and I'm going to turn it back off. I'm going to publish again just so it saves that change and I'm going to do the back arrow. So then you have a search page section so you can post thumbnails if you choose to.

And by the way, I'm going to go back there. If I hover over that question mark, it Tells me it enable post featured thumbnails on the search page. So I don't need that to happen.

I'm going to do that back arrow. Static front page is the next one. So this is something I can get to through settings too.

So my home page is a static page. It's the about me page and my post page is my blog page. And I am going to do the back arrow and leave that as is.

The next area is comments and so it has this HTML tag suggestion is on. Enable tags usage suggestion below comment form. So that's turned on.

I'm going to just do the back arrow. We have extra here. So nice scroll is off and back to the top is on.

So enable browser. Nice scroll. I believe if you enable nice scroll it allows you to do like one click scrolling and then back to top has an option to get back to the top of the page you're on.

So I'm going to leave those settings the way they are. I'm going to just go ahead and publish and then I'll show you. I'm going to close, customize and go back to my pages and I'll show you where the back to top located.

So if I scroll all the way to the bottom, you'll see in the very lower right corner there is an up arrow button and that is your back to top button. So easy navigation to get back to the top of a page. And I'm going to go back to my customizer.

Now this time I didn't use the clock at the top. I clicked on customize and it takes me right back there. So that was in general where we were under extra.

And then you have also in general you have additional CSS if you wanted to add any, if you know that programming. I'm going to do the back arrow to get out of general. And then you have typography, which will be the next category that we take a look at.

So I will expand that topic and there we have the site title. So it's giving you where you can change the font family, font size, all of that kind of stuff. And I'm going to go back and then you have the body and it's the same thing.

Your fonts, family and font sizes going to go back your top navigation, same thing. And noticing your top navigation, it's doing the text transform to uppercase. You might want to do the drop down and just choose capitalize and you can see it right there.

And I'm going to publish that. So it keeps it. And so then I'm going to go back and then I can change the font families for my primary and my mobile menus if I wanted to.

So for the primary one, I don't want that in uppercase. I'm going to go ahead and make that change. So the text transform, I'm going to just put it on capitalize.

You can even do things like space the letters here. So I am going to publish that and then I use the back arrow to get out of that category totally. We were in colors and styling earlier, but just for a brief moment.

So let's go back in there and that's when we changed the header image styling. So in here you also have general and all these other categories. So let's go through them.

The general category, the skin color is light, right? Your only other choice is dark and they have a lot of built in help here. If you hover over any question mark, it lets you know what you're dealing with there. I'm going to just go back.

Site title and tagline again is there. And this is in terms of color, the body is there. There's a left and a right.

But if I click on that circle then I can change my background colors here and then I can also put in a background image. I'm going to go back. We looked at the header image section, but the header can have a background color and a borders color if you would like.

I'm going to just do the back arrow. We already went over header image. Right.

Where we disabled the particles in the background overlay to get rid of that color coloration. And then you can go to your colors and styling for your top navigation, showing you the links color, your mobile navigation and your primary navigation. We have nav bar buttons.

If we have a nav bar, we can change the coloration of that as well. You have breadcrumb where you can change background font and links colors. You have a slider category as well as the footer category.

And so we added a social icon in our footer and it shows what the color would be if you added that. If we had a copyright links color, we can change that color as well as the widget area background colors and the footer area background colors. So these choices to me are so personal.

I'm not recommending anything here. It just depends on how you want your site to look. So I'm going to just do the back arrow to get out of colors and styling and then we'll proceed through some of these other categories.

The next category we're going to take a look at is the layout category in our customizer. You have two choices there. General.

So the layout style by default for this theme is full width. I'm going to do the drop down and I can select boxed. And you can see the change here where it's no longer full width.

It's kind of in a boxed layout. I'm going to do the drop down and change it back to full width. I prefer that for my blog.

And I'm going to go to the back arrow and then I have the sidebar and its position is on the right. I could change it to the left here if I wanted to. I'm going to just do the back arrow.

The next one we have is header and we dealt with the header image before. So let's look at our general settings there. So I'm on header style V3.

I'm going to go back to header style V1 and you notice that it has one toggle and that's the primary menu to float on the right side. If we turn that on, you go up here and this is my primary menu. When I turn that on and I hover over it, those lines kind of disappear a little bit.

And then I have to go back and re. Hover. Turn that off.

I don't see any really change here that it was floating on the right side. I'm going to go to header style V2 and this is where I can enable that top navigation. If I didn't want that top navigation, I can disable it here.

I can tell it to hide the top navigation in mobile view. So I could do that if I was looking at it in mobile view. And you have settings for enabling your social icons, which we used and we got rid of the social icon that was up there.

And then you can change your margin and your border there as well. And then you have header V3 and when I switch to that one, I get the ability to do that primary float. I'll try it again here.

Nothing. And the other same choices pretty much. So I'm going to just leave mine on V3, which is where it was to begin with.

And I'm going to do the back arrow. And then if you want to add a logo, you can select an image from from logo. I'm going to just go back Nav bar buttons.

Okay. I misspoke earlier when I said that we couldn't remove that search icon from the navbar. We can hear by clicking on its eyeball.

So I didn't realize that. And I misspoke earlier. So we removed it from the widget area because it was both on that menu navbar and in the widget area.

We could have kept it in the widget area and removed it from that nav bar in the way I showed you. I'm going to just do the back arrow there and leave it in the navbar and then I'm going to back arrow again. Your next one is navigations, and this is for your mobile.

You could give it a menu icon title and I'm going to just back arrow that you have. We have a few more that we're going to go through. So let's go ahead and look at breadcrumbs.

And the first thing I'm going to do is I'm going to enable the breadcrumb by turning it on and I'm going to disable the breadcrumb on the home page. Right. So now, basically, in this theme, in order to see the breadcrumb, you need to have both of these enabled.

So just wanted to point that out. The breadcrumb style by default is mini. Your other choice is normal.

And so this is your breadcrumb here. This is what a breadcrumb would look like. And you can click the house.

Right. In this case, it takes me back to the home page, which I'm already on. So that's what the breadcrumb does.

If I go to my blog page from here, I can see the breadcrumb on that page as well. So that would take me back to my home page, which is my about Me page. So I'm going to just do.

I don't particularly want the breadcrumbs. I think I have enough navigation. So I'm going to turn my breadcrumbs off and then go back.

The next option is slider. The slider is our next one and you use the slider if you want to display a slideshow of images and videos. And on the general portion, you get to tell it the height of the slider, the time and the visibility.

Right. You can change it from your front page to your home page or whatever page you want it on. And I'll go to the back arrow.

And then you have the slide section where you can add images. Right. You can give it a title.

I'm going to go ahead and just grab an image here just to kind of demonstrate this. And I'll use my Cherry Tomatoes image just as a demonstration. It has a box title.

Welcome to Agama. And so this is what the slider looks like here. I'm not going to continue to Build this one out.

But I have. I can change the title, color, the animation. You have all these different animations.

You have a button title. Learn more. Right.

And then the button link, which you may want to put on another page, create another page for that. You could change the color of that button and have the button animated as well. It lets me know that I am limited to two rows here.

Right. So I am going to just remove that image and I'm actually going to just scroll to the bottom and remove that entire default slider. So, yeah, if you have need of using that, it's pretty easy to figure out.

I'm doing my back arrow here. And then you have front page boxes. Now I'm going to go to general first and I'm going to have the visibility on all pages just to show you what this would look like.

And then I'm going to do the back arrow and expand boxes and choose Add new. So for a box title, I'm going to just. And this is just a demo, I don't actually use boxes on my site, but you'll see what it does.

So for the box title, I'm just going to put in my box. And so you can see that here it says front page boxes and then the title, my box, I can add an image and I'll select the question mark here just for demonstration purposes. And then it wants you to enter the font awesome icon name.

And it gives you an example. It's preceded by fa. So I'm going to just put in FA dash question.

And you can see now that I have a purple question mark as well based on this color here. I can enter the box image URL. I can enter box text.

I can make the box animated by checking that. So you see the box has that bounce animation. I can change it to jello and see what that animation looks like.

So it wiggles. And then you can set your animation delay. So that's what a front page box does.

It gives you the ability to have another image on your page. And I'm going to just go and remove my image, remove my. My box title, get rid of the font awesome icon name.

Now I got rid of the purple question mark and I'm going to do the back arrow and go back into general. And for visibility, I'm going to just put it on home page. And so it's back to the default and it's not showing anything.

So I'm going to just do my back arrow there to get back to my customizer. So we only have a couple of more customizations to review. The next one would be blog and we have general right.

So our default is a list layout for our blog. I'm going to leave mine on that you can see your other choices. I can have my post animated.

It's already on. I can change the animation here if I wanted to. The blog post featured image on the blog page.

I have the ability to have that happen as well as a featured image permalink it's showing an excerpt and I can change the size of the excerpt from here. It does have that read more button shows information about the author as well which is based on their profile information. And enabling infinite scrolling is just an easier way of scrolling through a blog post.

I'm going to use the back arrow and expand single post. So I have that featured image there as well. Back arrow and the post meta everything is enabled here in terms of the metadata.

So we have the author, the date, the category, comments, so on and so forth. And I can just back arrow out of blog. We already went over social icons and social share.

So you know the difference between those. We customized our menus or you saw how to do it and we added widgets. And the last thing that we're going to look at is the footer.

So I'm going to expand that and footer social icons are enabled. But this gives you a copyright area in the footer and I can just put in for right now just to show you what it would look like. I'll put copyright 2023 something like that.

And if I scroll all the way to the bottom, I'll see underneath that footer one section, there's that copyright 23 and I'm going to just delete that for right now. Don't need that in there. And I'll use my back arrow to get back.

Now when we get to a later module where we're discussing SEO search engine optimization, we'll review our YOAST SEO settings and we'll come back to customize to look at the Yoast SEO breadcrumbs customization that can be done. So for right now, just so everything that I changed and everything, I'm going to just go ahead and publish up top and then I'm going to close the customizer. And our final lesson in this module is amp plugins for WordPress.

So amp stands for Accelerated Mobile Pages. It's an open source development framework that was developed by Google and it was introduced in 2015. The goal of AMP is to decrease load times on mobile devices by removing excessive page elements and features that require more resources to process when accessed on a mobile device.

Heavier websites, which are those which contain and execute more HTML, CSS and scripts, take longer to load. AMP creates alternative mobile versions of web pages that remove excess code and bulky media content, leaving a stripped down page. This cuts down load times and improves the mobile user experience.

I have a link on this slide to the 10 best AMP plugins for WordPress, but we should know that we have two plugins already that deal with accelerated mobile pages and those are Jetpack and Yoast SEO. And so there's nothing that we would have to do this is going to happen automatically because of either of those two plugins. By way of recap of module three, we spent more time customizing our website's appearance and design.

We started by using menus and we notice that the theme that we selected offices three different menus. So we have that top menu, we have a primary menu, and we have a mobile menu. The second lesson we concentrated on widgets and what we did is we removed a widget from the right sidebar and we added two social icon wizards to that sidebar.

As we didn't have a social links menu choice with our theme, so we used widgets to add some social links. Then we went into using the WordPress customizer. We had used it in the previous module just briefly, so we went through all of the Options on the WordPress customizer so that you can further customize your site in any way that you wish.

We briefly reviewed amp plugins for WordPress. I have a slide in the deck that gives you a link to some top plugins, but I explained that we already have AMP enabled via our Jetpack plugin as well as our Yoast SEO plugin, so there's nothing for us to do there. We'll be providing a better user experience for our mobile users, so I'd like to thank everyone for viewing this WordPress course again.

My name is Trish Connor Cato and it's been my pleasure to present this video to you. Thanks for watching. To earn certificates and watch our courses without ads, check out learnytime.com.