# ibexshells
## Ibex Shells and Experiments for Sharing

**I am not profiting off of this in any way, just trying to share how I've programmed experiments in the past. All credit goes to Alex Drummond and the Ibex Farm server.**

Citation: Drummond, A., von der Malsburg, T., Erlewine, M. Y., & Vafaie, M. (2016). Ibex Farm. 	https://github.com/addrummond/ibex. GitHub

This repository includes various Ibex shells (templates) that I've made for different online psycholinguistic experiments using Ibex Farm. I do not believe this works with PC-Ibex,
but you can probably figure out a way to make it compatible if you're more savvy with js than I. It is highly recommended that you understand the core concepts of the data file
such as var shuffleSequence, var defaults, and var Items before using these shells. You can find documentation here: https://github.com/addrummond/ibex/blob/master/docs/manual.md

For each shell, you need to first need to create an experiment in Ibex Farm. You can call it whatever you want. To do so, go to spellout.net/ibexfarm - accounts are free thanks to
the generosity of the creator, Alex Drummond.

Once you create your experiment, open it up and you'll see a bunch of sections ending with _includes. Follow these instructions:

1. Delete anything in chunk_includes
2. Upload all html files into chunk_includes
3. Delete the file in data_includes
4. Upload the data file (will be .js and share the name of the shell) into data_includes.
5. Upload any additional .js files to js_includes
6. Upload any additional .cs files to cs_includes

Once you've done this, you can look through all the items I have included for a sense of what things can look like and how you would code each type of stimulus. To view one item,
simply put that items name in the shufflesequence as directed in the comments of the data file.
