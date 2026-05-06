const filtersContainer = document.querySelector(".filters")
const imageInput = document.querySelector("#image-input")
const imageCanvas = document.querySelector("#image-canvas")
const placeholderContent = document.querySelector(".placeholder")
const resetButton = document.querySelector("#reset-btn")
const downloadButton = document.querySelector("#download-btn")
const presetsContainer = document.querySelector(".presets")

let canvasCtx = imageCanvas.getContext("2d")
let file = null;
let image = null;

let filters = {
    Brightness : {
        value : 100,
        min : 0,
        max: 200,
        unit : "%"  
    },
    Contrast : {
        value : 100,
        min : 0,
        max: 200,
        unit : "%"  
    },
    Saturation : {
        value : 100,
        min : 0,
        max: 200,
        unit : "%"  
    },
    HueRotate : {
        value : 0,
        min : 0,
        max: 360,
        unit : "deg"  
    },
    Blur : {
        value : 0,
        min : 0,
        max: 20,
        unit : "px"  
    },
    Grayscale : {
        value : 0,
        min : 0,
        max: 100,
        unit : "%"  
    },
    Sepia : {
        value : 0,
        min : 0,
        max: 100,
        unit : "%"  
    },
    Opacity : {
        value : 100,
        min : 0,
        max: 100,
        unit : "%"  
    },
    Invert : {
        value : 0,
        min : 0,
        max: 100,
        unit : "%"  
    },
}

let presets = {
  
   Oppenheimer: {
      Brightness: 90,
      Contrast: 140,
      Saturation: 60,
      HueRotate: 10,
      Blur: 0,
      Grayscale: 20,
      Sepia: 30,
      Opacity: 100,
      Invert: 0,
   },

   OldSchool: {
      Brightness: 95,
      Contrast: 110,
      Saturation: 70,
      HueRotate: 0,
      Blur: 0,
      Grayscale: 40,
      Sepia: 60,
      Opacity: 100,
      Invert: 0,
   },



   Vintage: {
      Brightness: 105,
      Contrast: 90,
      Saturation: 80,
      HueRotate: -10,
      Blur: 0,
      Grayscale: 20,
      Sepia: 50,
      Opacity: 100,
      Invert: 0,
   },


   WarmSunset: {
      Brightness: 110,
      Contrast: 105,
      Saturation: 130,
      HueRotate: -20,
      Blur: 0,
      Grayscale: 0,
      Sepia: 30,
      Opacity: 100,
      Invert: 0,
   },

   BnW: {
      Brightness: 100,
      Contrast: 120,
      Saturation: 0,
      HueRotate: 0,
      Blur: 0,
      Grayscale: 100,
      Sepia: 0,
      Opacity: 100,
      Invert: 0,
   },

   Dreamy: {
      Brightness: 110,
      Contrast: 85,
      Saturation: 120,
      HueRotate: 20,
      Blur: 2,
      Grayscale: 0,
      Sepia: 10,
      Opacity: 100,
      Invert: 0,
   },


};

function createFilterElement(name,unit = "%",value,min,max) {
    const div = document.createElement("div")
    div.classList.add("filter")


    const input = document.createElement("input")
     input.type = "range"
     input.value = value
     input.min = min
     input.max = max
     input.name = name

     const p = document.createElement("p")
     p.innerHTML = name

     div.appendChild(p)
     div.appendChild(input)
     
     input.addEventListener("input",()=>{
        // console.log(input.value)
        filters[name].value = input.value
         applyfilters()
     })

    return div;
}

 
function createFilter() {
     Object.keys(filters).forEach(key =>{
    const filterElement = createFilterElement(key,filters[key].unit,filters[key].value,filters[key].min,filters[key].max)
    filtersContainer.appendChild(filterElement)
})
}

createFilter()

imageInput.addEventListener("change",(event)=>{
   
     file = event.target.files[0]
    const placeholderContent = document.querySelector(".placeholder")
    placeholderContent.style.display = "none"
    imageCanvas.style.display = "block"
    const img = new Image()
    img.src = URL.createObjectURL(file)
   img.onload = ()=>{
      image = img
     imageCanvas.width = img.width
     imageCanvas.height = img.height
     canvasCtx.drawImage(img,0,0)
    
   }
})

function applyfilters() {
    canvasCtx.clearRect(0,0,imageCanvas.width,imageCanvas.height)
    canvasCtx.filter = `
                       brightness(${filters.Brightness.value}${filters.Brightness.unit})
                       contrast(${filters.Contrast.value}${filters.Contrast.unit})
                       saturate(${filters.Saturation.value}${filters.Saturation.unit})
                       hue-rotate(${filters.HueRotate.value}${filters.HueRotate.unit})
                       blur(${filters.Blur.value}${filters.Blur.unit})
                       grayscale(${filters.Grayscale.value}${filters.Grayscale.unit})
                       sepia(${filters.Sepia.value}${filters.Sepia.unit})
                       opacity(${filters.Opacity.value}${filters.Opacity.unit})
                       invert(${filters.Invert.value}${filters.Invert.unit})
    `.trim()
     canvasCtx.drawImage(image,0,0)
    
}

resetButton.addEventListener("click",()=>{

   filters = {
    Brightness : {
        value : 100,
        min : 0,
        max: 200,
        unit : "%"  
    },
    Contrast : {
        value : 100,
        min : 0,
        max: 200,
        unit : "%"  
    },
    Saturation : {
        value : 100,
        min : 0,
        max: 200,
        unit : "%"  
    },
    HueRotate : {
        value : 0,
        min : 0,
        max: 360,
        unit : "deg"  
    },
    Blur : {
        value : 0,
        min : 0,
        max: 20,
        unit : "px"  
    },
    Grayscale : {
        value : 0,
        min : 0,
        max: 100,
        unit : "%"  
    },
    Sepia : {
        value : 0,
        min : 0,
        max: 100,
        unit : "%"  
    },
    Opacity : {
        value : 100,
        min : 0,
        max: 100,
        unit : "%"  
    },
    Invert : {
        value : 0,
        min : 0,
        max: 100,
        unit : "%"  
    },
}
applyfilters()
filtersContainer.innerHTML = ""
createFilter()
})

downloadButton.addEventListener("click",()=>{

    const link = document.createElement("a")
    link.download = "edited-image.png"
    link.href = imageCanvas.toDataURL()
    link.click()

})

function createPresets(params) {
    Object.keys(presets).forEach(presetName=>{
        const button = document.createElement("button")
    button.classList.add("btn")
    button.innerHTML = presetName
    presetsContainer.appendChild(button)

    button.addEventListener("click",()=>{

       const preset = presets[presetName]
    //    console.log(presets[presetName]);
       
       Object.keys(preset).forEach(filterName=>{
            filters[filterName].value = preset[filterName]
       })
       applyfilters()
       filtersContainer.innerHTML = ""
       createFilter()
    })
})
}

createPresets()

