<p align="center">
	<img src="assets/img/fewd-logo.png" />
</p>

# GA FEWD: Course Website and Notes

A static web portal and notes for General Assembly's part-time Frontend Web Development (FEWD) course.

Hosted at [http://fewd.nyc/](http://fewd.nyc/) using [surge.sh](http://surge.sh).

Please feel free to fork for your own class. Contributions are welcome 👍

If you are looking for just the static web portal, see [https://github.com/cheshireoctopus/gafewd-portal](https://github.com/cheshireoctopus/gafewd-portal).

If you are looking for just the notes, see [https://github.com/cheshireoctopus/gafewd-notes](https://github.com/cheshireoctopus/gafewd-notes).

*Note: Are you teaching JSD? Be sure to checkout [https://github.com/cheshireoctopus/gajsd](https://github.com/cheshireoctopus/gajsd).*

### Setup

1. If deploying through Surge, add a `CNAME` file containing your desired URL in the `public` directory ([more info](http://surge.sh/help/remembering-a-domain)).

2. Sass files live at `assets/sass` and are compiled to `public/css/build.css` by running `./bin/sass` from root.

### Workflow

You will notice that the `materials` and `notes` directories exist both at the root of this project, as well as inside of the `public` directory.

As the two directories at the project root are not exposed to the public, I use them as a workplace; once the notes and materials for a particular class are complete, I move the associated files into the public directory.
