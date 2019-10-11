# About
This Caching mechanism is built to store key value pairs and arrange items according to their last access.
When cach is full of its maximum size, least used item will be removed and new item will be added.

## How to Integrate?
 - Clone/Download script.js file and index.html(sample)
 - link this script to index.html (already linked in sample)
 
## How to use?
MyCache object is available globaly which have four usefull methods
1. setItem()
2. getItem()
3. getList()
4. reset()

## 1. setItem(key,value)
- Take key and value to be stored in cache
- Return **TRUE** if addedd successfully
- Return **FALSE** if key is already exist

## 2. getItem(key)
- Take key to be searched in cache
- Return **Item's Value** if found
- Otherwise return **FALSE**

## 3. getList()
- Return array of items present in cache
- Return empty array if no item in cache

## 4. reset()
- Make empty cache.

## Example

```
MyCache.setItem(1,a) 
MyCache.setItem(2,b)
MyCache.setItem(3,c)
MyCache.setItem(4,d)
MyCache.setItem(5,e)
MyCache.setItem(6,f)
MyCache.setItem(7,g)
MyCache.setItem(8,h)
MyCache.setItem(9,i)
MyCache.setItem(10,j)

MyCache.getItem(7)
MyCache.getList()

MyCache.setItem(11,i)
MyCache.getList()

```
## Output
```
[11,7,10,9,8,6,5,4,3,2]
```
## Explaination
- 10 items are stored making 10th most recent and 1st least recent
- 7th item get acceesed so making 7th most recent
- 11th item trying to add so removing least used item which is 1st one, and making 11th as a most recent item
