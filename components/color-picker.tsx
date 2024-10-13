'use client'
// import React, { HtmlHTMLAttributes } from 'react'
import { useState, ChangeEvent } from 'react'
import { Card, CardTitle, CardDescription } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'


const ColorPickerPage = () => {
    //states
    const [color, setColor] = useState<string>('#000000')

    // methods
    const handleColorChange = (e:ChangeEvent<HTMLInputElement>): void => {
        setColor(e.target.value)
    }

    const copyColor = (): void => {
        navigator.clipboard.writeText(color)
        alert('color copied...!')
    }

  return (
    <>
  <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
  <Card className="w-full max-w-md mx-auto p-8 grid gap-8 bg-white shadow-2xl rounded-3xl">
    <div className="text-center space-y-2">
      <CardTitle className="text-3xl font-bold text-gray-800">Color Picker</CardTitle>
      <CardDescription className="text-gray-600">
        Select a color and copy the hex and RGB values.
      </CardDescription>
    </div>
    <div className="grid gap-4">
      <div
        className="w-full h-48 rounded-lg border-4 border-gray-300 shadow-inner"
        style={{ backgroundColor: color }}
      />
      <div className="grid gap-2 text-center">
        <div className="text-2xl font-bold text-gray-800">{color}</div>
        <div className="text-gray-500">
          RGB: {parseInt(color.slice(1, 3), 16)}, {parseInt(color.slice(3, 5), 16)}, {parseInt(color.slice(5, 7), 16)}
        </div>
        <Button
          onClick={copyColor}
          variant="default"
          className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Copy to Clipboard
        </Button>
      </div>
      <Input
        type="color"
        value={color}
        onChange={handleColorChange}
        className="w-full h-16 p-0 border-0 rounded-lg cursor-pointer transition-all duration-300 focus:ring-4 focus:ring-blue-400"
      />
    </div>
  </Card>
</div>

    </>
  )
}

export default ColorPickerPage