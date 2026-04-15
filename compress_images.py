#!/usr/bin/env python3
"""
Script to compress images for web use
Converts PNG to JPG where applicable and optimizes quality
"""

from PIL import Image, ImageOps
import os
from pathlib import Path

def compress_image(input_path, output_path, max_width=2000):
    """Compress an image for web use"""
    try:
        with Image.open(input_path) as img:
            # Convert RGBA to RGB if needed (for JPG conversion)
            if img.mode in ('RGBA', 'LA', 'P'):
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                img = background
            
            # Resize if too large
            if img.width > max_width:
                ratio = max_width / img.width
                new_height = int(img.height * ratio)
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
            
            # Determine output format and quality
            ext = Path(output_path).suffix.lower()
            
            if ext in ['.png']:
                # Convert PNG to JPG for better compression (for most images)
                jpg_path = str(output_path).replace('.png', '.jpg')
                img.save(jpg_path, 'JPEG', quality=85, optimize=True)
                print(f"✓ {input_path} → {jpg_path}")
                return jpg_path
            elif ext in ['.jpg', '.jpeg']:
                img.save(output_path, 'JPEG', quality=85, optimize=True)
                print(f"✓ {input_path} → {output_path}")
                return output_path
            
    except Exception as e:
        print(f"✗ Error processing {input_path}: {e}")
        return None

def main():
    base_path = r'c:\Users\ali23\Downloads\deom\assets'
    images_to_process = []
    
    # Find all images
    for root, dirs, files in os.walk(base_path):
        for file in files:
            if file.lower().endswith(('.jpg', '.jpeg', '.png', '.gif')):
                full_path = os.path.join(root, file)
                images_to_process.append(full_path)
    
    print(f"Found {len(images_to_process)} images to compress\n")
    
    # Create backup directory
    backup_dir = os.path.join(base_path, 'backup')
    os.makedirs(backup_dir, exist_ok=True)
    
    # Process each image
    total_before = 0
    total_after = 0
    
    for img_path in images_to_process:
        # Get file size before
        size_before = os.path.getsize(img_path) / 1024  # KB
        total_before += size_before
        
        # Backup original
        rel_path = os.path.relpath(img_path, base_path)
        backup_path = os.path.join(backup_dir, rel_path)
        os.makedirs(os.path.dirname(backup_path), exist_ok=True)
        
        if not os.path.exists(backup_path):
            with open(img_path, 'rb') as src:
                os.makedirs(os.path.dirname(backup_path), exist_ok=True)
                with open(backup_path, 'wb') as dst:
                    dst.write(src.read())
        
        # Compress
        output_path = img_path
        if img_path.lower().endswith('.png'):
            # For icon files, keep as PNG if small
            file_size = os.path.getsize(img_path) / 1024
            if file_size < 100 and 'icos' in img_path:
                # Keep PNG for icons, just optimize
                with Image.open(img_path) as img:
                    img.save(img_path, 'PNG', optimize=True)
                print(f"✓ {img_path} (optimized PNG)")
            else:
                # Convert to JPG
                jpg_path = img_path.replace('.png', '.jpg')
                compress_image(img_path, jpg_path)
                if os.path.exists(jpg_path):
                    os.remove(img_path)  # Remove original PNG
                    output_path = jpg_path
        else:
            compress_image(img_path, output_path)
        
        # Get file size after
        if os.path.exists(output_path):
            size_after = os.path.getsize(output_path) / 1024  # KB
            total_after += size_after
            reduction = ((size_before - size_after) / size_before) * 100
            print(f"  Size: {size_before:.1f} KB → {size_after:.1f} KB ({reduction:.1f}% reduction)\n")
    
    print("\n" + "="*60)
    print(f"Total size before: {total_before:.1f} KB ({total_before/1024:.1f} MB)")
    print(f"Total size after:  {total_after:.1f} KB ({total_after/1024:.1f} MB)")
    print(f"Total reduction:   {((total_before-total_after)/total_before)*100:.1f}%")
    print("="*60)
    print("\n✓ Image compression complete!")
    print("⚠ Note: Your original files are backed up in 'assets/backup'")

if __name__ == '__main__':
    main()
