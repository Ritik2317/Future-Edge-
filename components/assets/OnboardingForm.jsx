"use client";
import { onboardingSchema } from '@/app/lib/schema';
import { useRouter } from 'next/navigation'; 
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import useFetch from '@/hooks/use-fetch';
import { updateUser } from '@/actions/user';
import { toast } from 'sonner';
import { Loader } from 'lucide-react';
function OnboardingForm({ industries }) {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const router = useRouter();

  const {
    loading: updateLoading,
    fn:updateUserFn,
    data: updateResult,
  } = useFetch(updateUser);

  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({
    resolver: zodResolver(onboardingSchema),
  });
  const watchIndustry = watch("industry");
  const onSubmit = async(values)=>{
    try{
      const formattedIndustry = `${values.industry} - ${values.subIndustry.toLowerCase().replace(/ /g,"-")}`;
      await updateUserFn({
        ...values,
        industry: formattedIndustry,
      })
    }catch(error){
      console.log("Onboarding error:", error.message);
    }
  };
  useEffect(()=>{
    if(updateResult?.success && !updateLoading){
      toast.success("Profile generated successfully");
      router.push("/dashboard");
      router.refresh();
    }
  },[updateResult,updateLoading]);
  return (
    <div className="flex justify-center items-center mt-10">
      <Card className="w-full max-w-md shadow-lg rounded-2xl">
        <CardHeader className="space-y-2">
          <CardTitle className="text-xl font-semibold">
            Complete Your Profile
          </CardTitle>
          <CardDescription className="text-sm text-gray-500">
            Select your industry to get personalized career insights and recommendations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <Label htmlFor="industry" className="font-medium">
                Industry
              </Label>
              <Select
                onValueChange={(value)=>{
                  setValue("industry",value);
                  setSelectedIndustry(
                    industries.find((ind)=>ind.id === value)
                  );
                  setValue("subIndustry","");
                }}
              >
                <SelectTrigger id="industry" className="w-full">
                  <SelectValue placeholder="Select Industry" />
                </SelectTrigger>
                <SelectContent >
                  {industries.map((ind) => (
                    <SelectItem value={ind.id} key={ind.id}>
                      {ind.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.industry && (
                <p className='text-sm text-red-500'>
                  {errors.industry.message}
                </p>
              )}
            </div>
            {watchIndustry && <div className="space-y-2">
              <Label htmlFor="subIndustry" className="font-medium">
                Sub-industry
              </Label>
              <Select
                onValueChange={(value)=>setValue("subIndustry",value)}>
                <SelectTrigger id="subIndustry" className="w-full">
                  <SelectValue placeholder="Select Sub-indutry" />
                </SelectTrigger>
                <SelectContent >
                  {selectedIndustry?.subIndustries.map((ind) => (
                    <SelectItem value={ind} key={ind}>
                      {ind}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.subIndustry && (
                <p className='text-sm text-red-500'>
                  {errors.subIndustry.message}
                </p>
              )}
            </div>}
            <div className="space-y-2">
              <Label htmlFor="experience" className="font-medium">
                Experience
              </Label>
              <Input
                id="experience"
                type="number"
                min="0"
                max="50"
                placeholder="Enter years of experience."
                {...register("experience")}
              />
              {errors.experience && (
                <p className='text-sm text-red-500'>
                  {errors.experience.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="skills" className="font-medium">
                Skills
              </Label>
              <Input
                id="skills"
                placeholder="e.g. C++, Python, Machine Learning"
                {...register("skills")}
              />
              <p className='text-sm text-muted-foreground'>
                Separate multiple skills with commas.
              </p>
              {errors.skills && (
                <p className='text-sm text-red-500'>
                  {errors.skills.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio" className="font-medium">
                Professional bio
              </Label>
              <Textarea
                id="bio"
                placeholder="Tell us more about yourself..."
                {...register("bio")}
              />
              {errors.bio && (
                <p className='text-sm text-red-500'>
                  {errors.bio.message}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full hover:cursor-pointer" disabled={updateLoading}>
              {updateLoading ? (
                <>
                  <Loader className='mr-2 h-4 w-4 animate-spin'/>
                  Saving
                </>
              ):
                ("Complete Profile")
              }
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>

  );
}

export default OnboardingForm;
