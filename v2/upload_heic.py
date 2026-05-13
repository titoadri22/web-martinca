import os
import cloudinary
import cloudinary.uploader
from pillow_heif import register_heif_opener
from PIL import Image
import tempfile

register_heif_opener()

cloudinary.config(
    cloud_name="di6ohwfhe",
    api_key="696732269781684",
    api_secret="QPW5JMaA5HqCiRDXJJjFDyaJjhI"
)

files = [
    r"C:\Users\pc\Downloads\IMG_0914.HEIC",
    r"C:\Users\pc\Downloads\IMG_0911.HEIC",
    r"C:\Users\pc\Downloads\IMG_0913.HEIC",
    r"C:\Users\pc\Downloads\IMG_0949.HEIC",
    r"C:\Users\pc\Downloads\IMG_0915.HEIC"
]

urls = []
for file in files:
    img = Image.open(file)
    with tempfile.NamedTemporaryFile(suffix='.jpg', delete=False) as tf:
        temp_path = tf.name
    img.convert('RGB').save(temp_path, format='JPEG', quality=90)
    
    print(f"Uploading {file}...")
    result = cloudinary.uploader.upload(temp_path, folder="minicasas")
    urls.append(result['secure_url'])
    os.remove(temp_path)

print("UPLOADED_URLS:")
for url in urls:
    print(url)
