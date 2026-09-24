#!/usr/bin/env python3
"""
Packs the GitHub Pages static website into lpt-research-collaborative.zip
and copies it to public/lpt-research-collaborative.zip.
"""
import os
import zipfile
import shutil

ROOT_DIR = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))
ZIP_NAME = "lpt-research-collaborative.zip"
OUTPUT_PATH = os.path.join(ROOT_DIR, ZIP_NAME)
PUBLIC_PATH = os.path.join(ROOT_DIR, "public", ZIP_NAME)

FILES_TO_INCLUDE = [
    "index.html",
    "styles.css",
    "script.js",
    "favicon.svg",
    "README.md",
    "sitemap.xml",
    "robots.txt",
    "404.html"
]

ASSETS_DIR = os.path.join(ROOT_DIR, "assets")

def create_zip():
    print(f"Creating {OUTPUT_PATH}...")
    with zipfile.ZipFile(OUTPUT_PATH, 'w', compression=zipfile.ZIP_DEFLATED) as zipf:
        # Add root files
        for fname in FILES_TO_INCLUDE:
            fpath = os.path.join(ROOT_DIR, fname)
            if os.path.exists(fpath):
                zipf.write(fpath, arcname=fname)
                print(f"  Added {fname}")
            else:
                print(f"  WARNING: {fname} not found!")

        # Add assets
        for root, dirs, files in os.walk(ASSETS_DIR):
            for file in files:
                full_path = os.path.join(root, file)
                rel_path = os.path.relpath(full_path, ROOT_DIR)
                # Skip aistudio internal artifacts if any
                if "aistudio" in rel_path:
                    continue
                zipf.write(full_path, arcname=rel_path)
                print(f"  Added {rel_path}")

    # Copy to public/
    os.makedirs(os.path.dirname(PUBLIC_PATH), exist_ok=True)
    shutil.copy2(OUTPUT_PATH, PUBLIC_PATH)
    print(f"Copied to {PUBLIC_PATH}")
    print("Static ZIP generation complete!")

if __name__ == "__main__":
    create_zip()
