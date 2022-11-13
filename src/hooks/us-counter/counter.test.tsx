import { renderHook, act } from "@testing-library/react";
import { Counter } from "./counter";

describe('Render custom counter hook', ()=>{
    it('Should render initial count as 0', ()=>{
        const {result} = renderHook(Counter)
        expect(result.current.count).toBe(0);
    });

    it('should accept and render the same initial count', () => {
        const { result } = renderHook(Counter, {
          initialProps: { initialCount: 10 },
        })
        expect(result.current.count).toBe(10)
      });

    it('should render the increment', ()=>{
        const {result} = renderHook(Counter)
        act(() => result.current.increment());
        expect(result.current.count).toBe(1);
    });

    it('should render the decrement', ()=>{
        const {result} = renderHook(Counter)
        act(() => result.current.decrement());
        expect(result.current.count).toBe(-1);
    })
});
