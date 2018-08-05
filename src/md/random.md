---
path: "/blog/super-cool-thing"
date: "2017-11-07"
title: "super cool thing"
---
There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.


![Flowers](https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX18211661.jpg "Title")


Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3


- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item



> É impossível para um homem ser enganado por outra pessoa que não seja ele próprio.
>
> -- <cite>Ralph Waldo Emerson</cite>

A [link](http://example.com "Title").

	
I have more [^1] to say up here.

[^1]: To say down here.I have mo


	
1. Item
2. Item
   * Mixed
   * Mixed  
3. Item1. Item 2. 



	

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```