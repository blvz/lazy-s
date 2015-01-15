# Automator Services

## Copy Dimensions as [Stylus](https://github.com/learnboost/stylus)

Select any number of images and trigger this service to have their dimensions and path copied to the clipboard, like so:

```
width 128px
height 128px
background url('../images/picture.png')
```


## Copy RTF as HTML

Select any rich text, from your favorite text editor (or even a PDF) and trigger this service to copy it as a basic HTML formatting.


## Paste RTF as HTML

With rich text already copied to the clipboard, trigger this service to paste it with basic HTML formatting. The `Copy RTF as HTML` service is preferred over this one, but some apps (like Microsoft PowerPoint) don't expose the selection as RTF, making this workaround necessary.

**Note**: For this service to work, the application in which the copy is being pasted, must be allowed to control the computer. On OS X Yosemite, this can be done in `Settings > Security & Privacy > Privacy > Accessibility`.

This occurs because after converting the clipboard to HTML, the service clicks automatically on the `Edit > Paste` menu item, which works way better than triggering the `Paste` keystroke.


## Duplicate as JPG / GIF

Select any number of images and trigger one of these services to get those duplicated and converted to JPG or GIF.


## iTerm to Here

Trigger this service on Finder, to `cd` to the current selected directory. If no directory is selected, it'll `cd` to the active window's directory.


## Open In Atom With Root

The service will open the selected file and guess the root of the project, when opening it with Atom.


## Toggle Hidden Files

With Finder opened, trigger this service to toggle hidden files visibility.


## Move Selection To New Folder

Trigger this service to group selected Finder items into a new folder.

**Note**: This service uses the `Run JavaScript` action, which is only available on OS X 10.10+.


## New Folder Inside Selected Folders

Select any folders in Finder and trigger this service to create new folders inside them. Very useful when organizing files while on _list view_.

**Note**: This service uses the `Run JavaScript` action, which is only available on OS X 10.10+.
