# Syntax
```css
@media [not] _media-type_ and (_media-feature: value_) and (_media-feature: value_) {
	/* CSS rules to apply */
}
```

## Examples
```css
/* Apply different rules for small screens */
@media (max-width: 600px) {
	/* CSS rules */
}
```

The above will only apply to screens slimmer than 600px, but you can also create a middle filter.

```css
@media (max-width: 600px) and (min-width: 500px) {
	/* CSS Rules */*
}
```

This will only apply for screens between 500px and 600px wide.

# References
1. [W3 Schools](https://www.w3schools.com/css/css3_mediaqueries.asp)
2. [Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries/Using)