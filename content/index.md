---
seo:
  title: Write beautiful docs with Markdown
  description: Ship fast, flexible, and SEO-optimized documentation with beautiful
    design out of the box. Docus brings together the best of the Nuxt ecosystem.
    Powered by Nuxt UI.
---

::u-page-hero
#title
Ivy by Pedro Pathing.
#description
Command-based control flow for FTC like you've never seen before

#links
::u-button
---
color: neutral
size: xl
to: /getting-started
trailing-icon: i-lucide-arrow-right
---
Get started
::

::u-button
---
color: neutral
icon: simple-icons-github
size: xl
to: https://github.com/Pedro-Pathing/Ivy
variant: outline
---
Star on GitHub
::
::

::u-page-section
---
title: Create Autos in Seconds
icon: i-lucide-workflow
description: Compose basic commands into complex behaviors with ease.
orientation: horizontal
---

```java
sequential(
    parallel(
        intake.on,
        shooter.on
    ),
    follow(toShoot),
    repeat(transfer.shoot.then(wait(250)), 3),
    parallel(
        intake.off,
        shooter.off
    ),
    follow(leave)
);
```

::


::u-page-section
---
title: Build Commands from Basic Primitives
icon: i-lucide-hammer
description: Use basic "primitive" commands to build complex commands.
orientation: horizontal
reverse: true
---

```java
Command shoot = instant(() -> servo.setPosition(0.5))
    .then(wait(250))
    .then(instant(() -> servo.setPosition(0)));
```

::

::u-page-section
---
title: Binding Commands to Gamepad Buttons
icon: i-lucide-gamepad
description: Reuse your auto commands in TeleOp by binding them to gamepad buttons.
orientation: horizontal
---

```java
bind(() -> gamepad1.triangle)
    .toggleRise(
        shooter.on.then(onInterrupt(shooter.off))
    );

bind(() -> gamepad1.right_trigger > 0.05)
    .riseToFall(
        loop(transfer.shoot.then(wait(250)))
    );
```

::

