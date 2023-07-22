# Encoders

SuperDuperDB supports insertion of any standard datatypes supported by the underlying database.
However, in many AI use-cases, these data-types are not sufficient for the intended data.
A typical example is computer-vision use-cases, utilizing `.jpg` or `.png` images,
for which MongoDB, for example, does not provide native support.

In order to use such complex data, SuperDuperDB provides the `Encoder` abstraction.
Users may create their own encoders with SuperDuperDB using this abstraction directly,
and register these encoders with SuperDuperDB using `db.add`.

```python
import pickle
from superduperdb.core.encoder import Encoder

e = Encoder('my-encoder', encode=pickle.dumps, decode=pickle.loads)
```

SuperDuperDB also includes pre-baked encoders in `superduper.encoders`.
For example, images may be encoded with `superduperd.encoders.pillow.image.pil_image`
Encoders make it possible to encode Python objects inserted into the database, with
just a few modifications of a standard insert:

```python
from superduperd.encoders.pillow.image import pil_image as i
from superduperdb.datalayer.mongodb.query import Collection
from superduperdb.core.documents import Document as D

coll = Collection('documents')
paths = glob.glob('images/*.png')
db.execute(
    coll.insert_many([
        D({'img': i(PIL.Image.open(img_path))})
        for img_path in paths
    ], encoders=(i,))
)
```

Encoders in use with the database may be displayed with `db.show`:

```pyhon
>>> db.show('encoder')
['pil_image']
```

Given that we have setup our encoders and data in this way, when we reload our data, using database queries, the data is reloaded in the same format we saved in:

```python
>>> db.execute(coll.find_one())['img']
<PIL.PngImagePlugin.PngImageFile image mode=RGBA size=1164x860>
```

SuperDuperDB may now be used to use this downstream in models which require these complex datatypes as
inputs and/ or outputs.