# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: home.spec.ts >> changes billing, FAQ, and install language without console errors
- Location: tests\e2e\home.spec.ts:9:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /How does integration work/i })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - navigation "Primary navigation" [ref=e5]:
      - link [ref=e6] [cursor=pointer]:
        - /url: "#top"
        - text: ✦Aeye
        - superscript [ref=e7]: ®
        - emphasis [ref=e8]: v1.0-BETA
      - generic [ref=e9]:
        - link "<Home>" [ref=e10] [cursor=pointer]:
          - /url: "#home"
        - link "about" [ref=e11] [cursor=pointer]:
          - /url: "#about"
        - link "docs" [ref=e12] [cursor=pointer]:
          - /url: "#docs"
        - link "pricing" [ref=e13] [cursor=pointer]:
          - /url: "#pricing"
        - link "blog" [ref=e14] [cursor=pointer]:
          - /url: "#blog"
        - link "careers" [ref=e15] [cursor=pointer]:
          - /url: "#careers"
        - link "↗ CONTACT US" [ref=e16] [cursor=pointer]:
          - /url: "#contact"
  - main "Aeye homepage" [ref=e17]:
    - generic [ref=e18]:
      - generic [ref=e19]: SCROLL FOR MORE ↓
      - generic [ref=e22]:
        - generic [ref=e23]:
          - heading "A Next-Gen Powerful [ AI Product ] for Smarter Workflows." [level=1] [ref=e24]: A Next-Gen Powerful[ AI Product ]for Smarter Workflows.
          - generic [ref=e25]:
            - generic [ref=e26]:
              - img "Aeye customer" [ref=e27]
              - img "Aeye customer" [ref=e28]
              - img "Aeye customer" [ref=e29]
            - paragraph [ref=e30]:
              - text: Trusted by 10K+ Teams
              - strong [ref=e31]: ★ 4.9
              - text: /5
            - paragraph [ref=e32]: Automate complex tasks, streamline your workflows, and deliver better results faster — with AI handling the heavy lifting behind the scenes.
            - generic [ref=e33]:
              - link "GET STARTED" [ref=e34] [cursor=pointer]:
                - /url: "#pricing"
              - link "▷ WATCH DEMO" [ref=e35] [cursor=pointer]:
                - /url: "#demo"
        - generic [ref=e36]:
          - img "Partner logo" [ref=e38]
          - img "Partner logo" [ref=e40]
          - img "Partner logo" [ref=e42]
          - img "Partner logo" [ref=e44]
          - img "Partner logo" [ref=e46]
          - img "Partner logo" [ref=e48]
        - generic [ref=e49]: "> ADD-ON → INTELLIGENCE LAYER FOR ❏❐ YOUR STACK <"
    - generic [ref=e51]:
      - generic [ref=e52]:
        - paragraph [ref=e53]: "[N. 01 / 11 ] > KEY VALUE"
        - link "GET STARTED" [ref=e54] [cursor=pointer]:
          - /url: "#pricing"
      - heading "/ Less manual work. More intelligent execution. /" [level=2] [ref=e55]
      - generic [ref=e57]:
        - article [ref=e58]:
          - generic [ref=e59]: //001
          - heading "Smart Processing" [level=3] [ref=e60]
          - paragraph [ref=e61]: Automatically analyze inputs and transform them into structured, usable outputs in real time.
          - generic [ref=e62]: LESS WORK, MORE OUTPUT
        - article [ref=e63]:
          - generic [ref=e64]: //002
          - heading "Adaptive Workflows" [level=3] [ref=e65]
          - paragraph [ref=e66]: AI handles the heavy lifting behind changing workflow needs.
          - generic [ref=e67]: AI HANDLES THE HEAVY LIFTING
        - article [ref=e68]:
          - generic [ref=e69]: //003
          - heading "Better Results" [level=3] [ref=e70]
          - paragraph [ref=e71]: Generate clearer, more reliable output across every step.
          - generic [ref=e72]: PLUG IN, GET RESULTS
    - generic [ref=e74]:
      - generic [ref=e75]:
        - paragraph [ref=e76]: "[N. 02 / 11 ] > PERFORMANCE"
        - link "GET STARTED" [ref=e77] [cursor=pointer]:
          - /url: "#pricing"
      - heading "/ Real-time intelligence. Zero unnecessary work. /" [level=2] [ref=e78]
      - generic [ref=e80]:
        - generic [ref=e81]:
          - generic [ref=e82]:
            - generic [ref=e83]: < 1.8s
            - text: Generated Time
          - generic [ref=e84]:
            - generic [ref=e85]: 2-4x
            - text: Faster Execution
          - generic [ref=e86]:
            - generic [ref=e87]: ~ 90%
            - text: Steps Reduction
          - generic [ref=e88]:
            - generic [ref=e89]: 99.82%
            - text: Output Consistency
        - generic [ref=e90]:
          - paragraph [ref=e91]: ■ With Aeye
          - img "Chart After" [ref=e92]
    - generic [ref=e94]:
      - paragraph [ref=e96]: "[N. 03 / 11 ] > CORE CAPABILITIES"
      - generic [ref=e97]:
        - tablist [ref=e98]:
          - tab "DATA SIGNALS Context Awareness // 001 Understand inputs, context, and user intent — turning raw data into meaningful signals." [selected] [ref=e99] [cursor=pointer]:
            - generic [ref=e100]: DATA SIGNALS
            - generic [ref=e101]: Context Awareness
            - generic [ref=e102]: // 001
            - emphasis [ref=e103]: Understand inputs, context, and user intent — turning raw data into meaningful signals.
          - tab "ACTIONABLE LOGIC Intelligent Processing // 002" [ref=e104] [cursor=pointer]:
            - generic [ref=e105]: ACTIONABLE LOGIC
            - generic [ref=e106]: Intelligent Processing
            - generic [ref=e107]: // 002
          - tab "STRUCTURE DELIVERY Actionable Output // 003" [ref=e108] [cursor=pointer]:
            - generic [ref=e109]: STRUCTURE DELIVERY
            - generic [ref=e110]: Actionable Output
            - generic [ref=e111]: // 003
        - tabpanel "Context Awareness" [ref=e112]
      - generic:
        - heading "/ Three core layers. One seamless system. /" [level=2]
      - generic [ref=e113]:
        - article [ref=e114]:
          - text: Works with your workflow
          - paragraph [ref=e115]: Connect seamlessly with your existing tools, systems, and data sources.
        - article [ref=e116]:
          - text: Minimal by default
          - paragraph [ref=e117]: Focus only on what matters, no unnecessary complexity.
        - article [ref=e118]:
          - text: Built to scale
          - paragraph [ref=e119]: Handle growing workflows, data, and outputs over time.
    - generic [ref=e121]:
      - generic [ref=e122]:
        - paragraph [ref=e123]: "[N. 04 / 11 ] > HOW IT WORK"
        - link "CONTACT US" [ref=e124] [cursor=pointer]:
          - /url: "#contact"
      - heading "/ Understand the flow. See how it all connects. /" [level=2] [ref=e125]
      - generic [ref=e127]:
        - 'button "// 001 Add prompts, data, or context from your workflow with minimal setup. Input your data Workflow stage icon: Input your data" [pressed] [ref=e128] [cursor=pointer]':
          - generic [ref=e129]: // 001
          - paragraph [ref=e130]: Add prompts, data, or context from your workflow with minimal setup.
          - heading "Input your data" [level=3] [ref=e132]
          - 'img "Workflow stage icon: Input your data" [ref=e133]'
        - 'button "// 002 Transform inputs into structured, meaningful outputs in real time. Process with AI Workflow stage icon: Process with AI" [ref=e134] [cursor=pointer]':
          - generic [ref=e135]: // 002
          - paragraph [ref=e136]: Transform inputs into structured, meaningful outputs in real time.
          - heading "Process with AI" [level=3] [ref=e138]
          - 'img "Workflow stage icon: Process with AI" [ref=e139]'
        - 'button "// 003 Turn processed data into actionable outputs ready to use, refine, or share. Generate results Workflow stage icon: Generate results" [ref=e140] [cursor=pointer]':
          - generic [ref=e141]: // 003
          - paragraph [ref=e142]: Turn processed data into actionable outputs ready to use, refine, or share.
          - heading "Generate results" [level=3] [ref=e144]
          - 'img "Workflow stage icon: Generate results" [ref=e145]'
        - 'button "// 004 Adjust inputs, and continuously improve results over time. Refine and repeat Workflow stage icon: Refine and repeat" [ref=e146] [cursor=pointer]':
          - generic [ref=e147]: // 004
          - paragraph [ref=e148]: Adjust inputs, and continuously improve results over time.
          - heading "Refine and repeat" [level=3] [ref=e150]
          - 'img "Workflow stage icon: Refine and repeat" [ref=e151]'
    - generic [ref=e153]:
      - generic [ref=e154]:
        - paragraph [ref=e155]: "[N. 05 / 11 ] > INSTALLATION"
        - link "CONTACT US" [ref=e156] [cursor=pointer]:
          - /url: "#contact"
      - heading "/ Simple to integrate. Unlock new workflow. /" [level=2] [ref=e157]
      - generic [ref=e159]:
        - generic "CLI code example" [ref=e160]:
          - code [ref=e161]: "npm install -g @aeye/cli # Authenticate aeye login --api-key $AEYE_API_KEY # Run task aeye generate --task summarize --input \"summarize the following document into key insights\""
        - generic [ref=e162]:
          - button "JavaScript" [ref=e163] [cursor=pointer]
          - button "CLI Run AI tasks directly from your terminal with a simple command-line tool." [active] [ref=e164] [cursor=pointer]:
            - text: CLI
            - generic [ref=e165]: Run AI tasks directly from your terminal with a simple command-line tool.
          - button "Python" [ref=e166] [cursor=pointer]
    - generic [ref=e168]:
      - generic [ref=e169]:
        - paragraph [ref=e170]: "[N. 06 / 11 ] > DOCUMENT"
        - link "GET STARTED" [ref=e171] [cursor=pointer]:
          - /url: "#pricing"
      - heading "/ Everything documented. Clear and practical. /" [level=2] [ref=e172]
      - generic [ref=e174]:
        - generic [ref=e175]:
          - paragraph [ref=e176]: Everything you need to get started.
          - generic [ref=e177]: Explore features, and integrate smoothly, without unnecessary complexity.
        - link "Core Concepts SETUP QUICK START BASICS // 001 ↗ VIEW" [ref=e178] [cursor=pointer]:
          - /url: "#docs"
          - heading "Core Concepts" [level=3] [ref=e179]
          - generic [ref=e180]: SETUP QUICK START BASICS
          - generic [ref=e181]: // 001
          - generic [ref=e182]: ↗ VIEW
        - link "Advanced Guide USAGE WORKFLOW ADVANCED // 002 ↗ VIEW" [ref=e183] [cursor=pointer]:
          - /url: "#docs"
          - heading "Advanced Guide" [level=3] [ref=e184]
          - generic [ref=e185]: USAGE WORKFLOW ADVANCED
          - generic [ref=e186]: // 002
          - generic [ref=e187]: ↗ VIEW
    - generic [ref=e189]:
      - paragraph [ref=e191]: "[N. 07 / 11 ] > TESTIMONIAL"
      - heading "/ Less talk, more shipping. See what they are saying. /" [level=2] [ref=e192]
      - generic [ref=e193]:
        - generic [ref=e194]:
          - button "Previous testimonial" [ref=e195] [cursor=pointer]: ‹
          - button "Next testimonial" [ref=e196] [cursor=pointer]: ›
        - generic [ref=e197]:
          - article [ref=e198]:
            - generic [ref=e199]: "@jaronsmith"
            - paragraph [ref=e200]: We reduced hours of manual work into a few automated steps. The workflow feels seamless — and the results are consistently reliable.
            - generic [ref=e201]: Jaron Smith
            - generic [ref=e202]: ↗ VIEW
          - article [ref=e203]:
            - generic [ref=e204]: ▶
            - generic [ref=e205]: 1:30 min
          - article [ref=e206]:
            - img "X social icon" [ref=e207]
            - generic [ref=e208]: WORKFLOW, DONE
            - paragraph [ref=e209]: Trusted by teams shipping useful products faster.
            - generic [ref=e210]: ↗ VIEW
    - generic [ref=e212]:
      - generic [ref=e213]:
        - paragraph [ref=e214]: "[N. 08 / 11 ] > PRICING"
        - tablist "Billing" [ref=e215]:
          - tab "Monthly" [ref=e216] [cursor=pointer]
          - tab "Annually SAVE 20%" [selected] [ref=e217] [cursor=pointer]:
            - text: Annually
            - generic [ref=e218]: SAVE 20%
      - heading "/ Simple pricing. Pay for what you use. /" [level=2] [ref=e219]
      - generic [ref=e221]:
        - article [ref=e222]:
          - heading "Starter" [level=3] [ref=e223]
          - paragraph [ref=e224]: For individuals exploring AI workflows
          - generic [ref=e225]: $5.00/month
          - link "GET STARTED" [ref=e226] [cursor=pointer]:
            - /url: "#contact"
          - list [ref=e227]:
            - listitem [ref=e228]: ✓ Basic AI processing
            - listitem [ref=e229]: ✓ Limited monthly usage
            - listitem [ref=e230]: ✓ Standard response speed
            - listitem [ref=e231]: ✓ Community support
        - article [ref=e232]:
          - text: MOST POPULAR
          - heading "Pro" [level=3] [ref=e233]
          - paragraph [ref=e234]: For builders and small teams
          - generic [ref=e235]: $15.00/month
          - link "GET STARTED" [ref=e236] [cursor=pointer]:
            - /url: "#contact"
          - list [ref=e237]:
            - listitem [ref=e238]: ✓ Higher usage limits
            - listitem [ref=e239]: ✓ Faster processing
            - listitem [ref=e240]: ✓ Priority API access
            - listitem [ref=e241]: ✓ Workflow customization
            - listitem [ref=e242]: ✓ Email support
        - article [ref=e243]:
          - heading "Max" [level=3] [ref=e244]
          - paragraph [ref=e245]: For teams running production workflows
          - generic [ref=e246]: $45.00/month
          - link "GET STARTED" [ref=e247] [cursor=pointer]:
            - /url: "#contact"
          - list [ref=e248]:
            - listitem [ref=e249]: ✓ Unlimited usage
            - listitem [ref=e250]: ✓ Dedicated performance
            - listitem [ref=e251]: ✓ Advanced workflow control
            - listitem [ref=e252]: ✓ Team & collaboration features
            - listitem [ref=e253]: ✓ Priority support
    - paragraph [ref=e257]: "[N. 09 / 11 ] > CHANGELOGS"
    - generic [ref=e260]:
      - paragraph [ref=e261]: "[N. 10 / 11 ] > BLOG"
      - link "READ ALL" [ref=e262] [cursor=pointer]:
        - /url: "#post"
    - paragraph [ref=e266]: "[N. 11 / 11 ] > FAQS"
    - generic [ref=e269]:
      - text: GET START IN MINUTE
      - heading "Workflow, [ Optimized ] Try it for free today!" [level=2] [ref=e270]: Workflow, [ Optimized ]Try it for free today!
      - link "GET STARTED" [ref=e271] [cursor=pointer]:
        - /url: "#pricing"
  - contentinfo [ref=e272]:
    - generic [ref=e273]:
      - generic [ref=e274]:
        - generic [ref=e275]:
          - img "Aeye" [ref=e276]
          - paragraph [ref=e277]: ● Stay in the Loop.
          - paragraph [ref=e278]: Get early access to feature drops, release notes, and workflow tips — straight from the builders.
          - generic [ref=e279]:
            - generic [ref=e280]: Email
            - textbox "Email" [ref=e281]:
              - /placeholder: Enter your email
            - button "JOIN" [ref=e282] [cursor=pointer]
        - generic [ref=e283]:
          - text: PAGES
          - paragraph [ref=e284]: HomeAboutDocsPricingBlogCareersContact
        - generic [ref=e285]:
          - text: FOLLOW US
          - paragraph [ref=e286]: 𝕏 Twitter ↗GitHub ↗Discord ↗Facebook ↗LinkedIn ↗
          - text: GET IN TOUCH
          - paragraph [ref=e287]: info@aeye.email(+01) 000 234 999L12 Conicorn Building, Hanoi, Vietnam
      - generic [ref=e288]:
        - text: © Aeye 2026 | License | Powered by Webflow
        - generic [ref=e289]: Privacy Policy / Terms of Service / Changelog
```

# Test source

```ts
  1  | import { expect, test } from '@playwright/test'
  2  | 
  3  | test('has no horizontal overflow at the mobile reference width', async ({ page }) => {
  4  |   await page.setViewportSize({ width: 375, height: 844 })
  5  |   await page.goto('/')
  6  |   await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBeTruthy()
  7  | })
  8  | 
  9  | test('changes billing, FAQ, and install language without console errors', async ({ page }) => {
  10 |   const errors: string[] = []
  11 |   page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()) })
  12 |   await page.goto('/')
  13 |   await page.getByRole('tab', { name: /Annually/i }).click()
  14 |   await expect(page.getByText('$45.00')).toBeVisible()
  15 |   await page.getByRole('button', { name: 'CLI', exact: true }).click()
  16 |   await expect(page.getByText(/npm install -g @aeye\/cli/)).toBeVisible()
> 17 |   await page.getByRole('button', { name: /How does integration work/i }).click()
     |                                                                          ^ Error: locator.click: Test timeout of 30000ms exceeded.
  18 |   await expect(page.getByText(/setup takes under five minutes/i)).toBeVisible()
  19 |   expect(errors).toEqual([])
  20 | })
  21 | 
```