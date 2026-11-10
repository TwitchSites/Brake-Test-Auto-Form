# Brake Test Recorder

Phone web app for HV brake testing. Pick the machine, tick the brake test, photograph the two
BrakeTesta slips, and it reads test number, speed, slope, capability, reaction time and
performance. It checks each pair against the site criteria and fills the
WHC-QLD-FRM Mandatory Brake Test Record Sheet, ready to share or save.

Slip reading happens on the phone (Tesseract.js). No account, no API key, and photos stay on the phone
unless you send them.

## How a test goes

1. **Start new test** at the top. Type the unit number (or serial or model) and pick the asset. Its serial,
   description and brake limits fill in. A unit that isn't on the list can be used as typed; the app
   remembers it, and the machine type you pick for it, next time.
2. Tick each brake test and photograph its 2 slips. Both slips in one photo works, side by side or one
   above the other, or one photo each. If a slip clearly prints the other brake (SECONDARY on a
   service test, say) it's flagged, with a button to move it to the right test.
3. Park brake: tap **Zero** with the phone on level ground, sitting where and how you'll read from
   (for example flat on the park brake panel). On the ramp, put it back in the same spot and tap
   **Read angle** for reverse and forward. It fills the gradient in %. Hold the phone still while it reads.
4. **Fill the record sheet**. The PDF is the 2-page record sheet plus slip pages: page 3 has the unladen
   slips and page 4 the laden slips, service on the top row and secondary on the bottom, each slip cut
   out of its photo. A slip that can't be cut out cleanly goes in as the whole photo instead.
   Under **Slips in the PDF** you see each slip as it will print. For any slip you can **Adjust crop**
   (drag the corners, or Turn 90°), switch to **Whole photo**, or tick **Also send photo**. The PDF
   updates each time.
5. **Email for review** opens the share menu with the PDF attached; pick Gmail. Loose photos are
   attached for slips you ticked, and for slips the app couldn't crop (untick to leave those off). Your supervisor's email (Settings → Review) is
   copied so you can paste it into To. Slip photos are kept on the phone until the next Start new test.

## Checks on each pair of slips

| Check | Result |
|---|---|
| Test numbers consecutive, not used in another test | Must pass |
| Slope 0 on both slips | Must pass |
| Speeds within 5 km/h of each other | Pass. 5–10 km/h asks you to accept a warning. Over 10 km/h is out of spec |
| Capabilities within 5% of each other | Pass. 5–10% asks you to accept a warning. Over 10% is out of spec |
| Capability at or above the machine's minimum | Must pass |
| Response time at or below the machine's maximum | Must pass |
| Test speed inside the rated range on the criteria sheet | Warning |

Tests that pass go on the form. A warning goes on once you accept it. An out-of-spec test goes on
with Pass or Fail ticked, whichever you choose (Fail unless you pick Pass). Untick a test to leave it
off. Brake performance goes in Comments as `#4034 = 25 %g`. Machines with no secondary test get N/A
ticked. Machine hours print with "hrs" after them.

## Put it online with GitHub Pages (free)

1. On github.com, create a new **public** repository, for example `brake-tests`.
2. **Add file → Upload files**, select every file in this folder, then **Commit changes**.
3. **Settings → Pages**, set Branch to `main` and folder `/ (root)`, then **Save**.
4. After a minute the link shows at the top of that page, like `https://yourname.github.io/brake-tests/`.
   Share that link with the crew.

`form.pdf` is the blank record sheet, so everyone has it ready. GitHub Pages sites are public, so
delete `form.pdf` before uploading if you'd rather not publish the company form. Each phone then
loads its own copy once under Settings → Record sheet PDF (a filled-in copy works too).

## First time on each phone

1. Open the link and tap **Settings**. Enter tester name, cert # and competency number.
   Check the test equipment and calibration dates.
2. Under **Offline use**, tap **Download it now** while you have signal (about 15 MB).
3. Add the page to the home screen (Share → Add to Home Screen on iPhone, ⋮ → Add to Home screen on Android).

## The asset list

`assets.js` holds the site's assets, one line each:

```js
{ unit: 'WT16', serial: 'SPD00814', description: 'CAT 789D Water Truck' },
```

The app matches each asset to its brake limits from the serial number (CAT serial prefixes) or the model
in its description. Add `machineId: 'float-793d-fdb'` to force a match when it can't tell, or
`machineId: 'other'` for a machine that isn't on the criteria sheet (793F, trailers). For those, the brake
limits are typed in the app the first time and remembered on that phone.

Anything not on the list: tap **Other** in the picker, or type the unit number and pick
**Other: use as typed**, then fill in the serial and machine type.

## Updating the limits

The machine limits are in `core.js`, in the `MACHINE_TABLE` near the top (from
WHC-BWM-SPC Brake Testing Performance Criteria, issue 3.1, 18 March 2026). Edit the numbers,
update `CRITERIA` with the new issue and date, and upload the file. Phones pick up the change the
next time they open the app with signal.

If the record sheet layout changes, the field positions are in `LAYOUT` in `core.js`.

## Files

- `index.html` app screens
- `core.js` limits, slip reading, checks, form filling
- `sw.js`, `manifest.webmanifest`, `icon*` offline use and home screen icon
- `ocr-worker.js` loads the slip reader
- `pdf-lib.min.js` PDF library (MIT licence in `pdf-lib-LICENSE.md`)
- `form.pdf` blank record sheet (optional, see above)
