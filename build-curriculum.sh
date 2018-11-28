#!/bin/sh

pandoc index.md  -s -o assets/AlanMarcell_en.pdf
pandoc index.md -o assets/AlanMarcell_en.odt
pandoc index.md -t docx -o assets/AlanMarcell_en.docx

pandoc curriculum.pt.md  -s -o assets/AlanMarcell_pt.pdf
pandoc curriculum.pt.md -o assets/AlanMarcell_pt.odt
pandoc curriculum.pt.md -t docx -o assets/AlanMarcell_pt.docx
