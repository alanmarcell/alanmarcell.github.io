#!/bin/sh

pandoc curriculum.en.md  -s -o assets/AlanMarcell_en.pdf
pandoc curriculum.en.md -o assets/AlanMarcell_en.odt
pandoc curriculum.en.md -t docx -o assets/AlanMarcell_en.docx

pandoc curriculum.pt.md  -s -o assets/AlanMarcell_pt.pdf
pandoc curriculum.pt.md -o assets/AlanMarcell_pt.odt
pandoc curriculum.pt.md -t docx -o assets/AlanMarcell_pt.docx
