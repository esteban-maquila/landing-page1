from PIL import Image
import colorsys

img = Image.open('WhatsApp Image 2026-04-01 at 9.36.47 PM.jpeg').convert('RGB').resize((150, 150))
colors = img.getcolors(150000)
colors.sort(key=lambda x: x[0], reverse=True)

def dist(c1, c2):
    return sum((a - b) ** 2 for a, b in zip(c1, c2)) ** 0.5

res_rgb = []
res_hex = []
for count, rgb in colors:
    # Ignore purely white or dark
    if sum(rgb) > 700 or sum(rgb) < 50:
        continue
    
    # Check if visually distinct from already added colors
    if all(dist(rgb, existing) > 40 for existing in res_rgb):
        res_rgb.append(rgb)
        res_hex.append('#%02x%02x%02x' % rgb)
        if len(res_hex) > 6:
            break

print(res_hex)
